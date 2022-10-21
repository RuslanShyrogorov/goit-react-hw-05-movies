import { useState } from 'react';
import { Button, Input, Form } from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [queryMovie, setQueryMovie] = useState('');

  const onChange = e => {
    setQueryMovie(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (queryMovie.trim === '') {
      return alert('Not found');
    }

    onSubmit(queryMovie);
    setQueryMovie('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="queryMovie"
        value={queryMovie}
        placeholder="Enter value"
        onChange={onChange}
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
}
