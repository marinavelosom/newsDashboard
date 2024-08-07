import React, { useState } from 'react';
import axios from 'axios';
import { format, eachDayOfInterval } from 'date-fns';
import NewsForm from './components/NewsForm';
import NewsChart from './components/NewsChart';
import NewsBarChart from './components/NewsBarChart';
import GlobalStyles from './styles/GlobalStyles';
import { 
  AppContainer,
  Button,
  ButtonsContainer,
  TitleContainer,
  Title,
  StyledImage,
  FooterContainer,
  Heart,
} from './styles/AppStyles';

interface Article {
  publishedAt: string;
  source: { name: string };
}

const App: React.FC = () => {
  const [data, setData] = useState<{ date: string, count: number }[]>([]);
  const [sourceData, setSourceData] = useState<{ source: string, count: number }[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  const handleFormSubmit = async ({ keyword, startDate, endDate }: { keyword: string, startDate: string, endDate: string }) => {
    setStartDate(startDate);
    setEndDate(endDate);

    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: keyword,
        from: startDate,
        to: endDate,
        apiKey: '0ade3d32760245ea9eed633861c4f493'
      }
    });

    const articles: Article[] = response.data.articles;
    const countByDate = articles.reduce((acc: { [key: string]: number }, article: Article) => {
      const date = article.publishedAt.split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    const allDates = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });

    const formattedData = allDates.map(date => {
      const formattedDate = format(date, 'yyyy-MM-dd');
      return { date: formattedDate, count: countByDate[formattedDate] || 0 };
    });

    const countBySource = articles.reduce((acc: { [key: string]: number }, article: Article) => {
      const source = article.source.name;
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});

    const formattedSourceData = Object.entries(countBySource)
      .map(([source, count]) => ({ source, count }));

    setData(formattedData);
    setSourceData(formattedSourceData);
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <TitleContainer>
        <StyledImage src={require('./assets/logo.png')}/>
        <Title>News Dashboard</Title>
      </TitleContainer>
      <NewsForm onSubmit={handleFormSubmit} />
      {chartType === 'line' ? (
        <NewsChart data={data} startDate={startDate} endDate={endDate} />
      ) : (
        <NewsBarChart data={sourceData} />
      )}
      <ButtonsContainer>
        <Button onClick={() => setChartType('line')}>Line Chart</Button>
        <Button onClick={() => setChartType('bar')}>Bar Chart</Button>
      </ButtonsContainer>
      <FooterContainer>
        By Marina Melo <Heart />
      </FooterContainer>
    </AppContainer>
  );
};

export default App;
