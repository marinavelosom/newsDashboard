import React, { useState } from 'react';
import { 
  Form,
  FormGroup,
  Label,
  Input, 
  Button,
  ButtonClear,
  SearchInputContainer,
} from '../styles/NewsFormsStyles';

interface NewsFormProps {
  onSubmit: (formData: { keyword: string, startDate: string, endDate: string }) => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ keyword, startDate, endDate });
  };

  const handleClearSearch = () => {
    setKeyword('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Keyword:</Label>
        <SearchInputContainer>
          <Input 
            type="text" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
          />
          {keyword && (
            <ButtonClear type="button" onClick={handleClearSearch}>
              X
            </ButtonClear>
          )}
        </SearchInputContainer>
      </FormGroup>
      <FormGroup>
        <Label>Start Date:</Label>
        <Input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
        />
      </FormGroup>
      <FormGroup>
        <Label>End Date:</Label>
        <Input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
      </FormGroup>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default NewsForm;

