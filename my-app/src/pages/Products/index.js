import React from "react";

import { Grid } from "@chakra-ui/react";
import { useQuery } from '@tanstack/react-query'

import Card from "../../components/Card";

function Products() {

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://5fc9346b2af77700165ae514.mockapi.io/products').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message;


  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
     {
      data.map((item, key) => <Card key={key} item={item}/>)
     }
      </Grid>
    </div>
  );
}

export default Products;
