import React, { useEffect, useState } from "react";
import { Card, CardBody, Text, Image, Stack, Heading } from "@chakra-ui/react";

const News = (props) => {
  const [news, setNews] = useState([]);
  const type = props.props;

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${type}&apiKey=77d5f58df26a4474aa3949c72baed534`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error));
  }, [type]);
  console.log(news);
  return (
    <div className="newsmain" overflow="scroll">
      {news.length > 0 && (
        <>
          {news.map((article) => (
            <div key={article.title}>
              <Card
                h="200px"
                m="10px"
                direction={{ base: "column", sm: "row" }}
                overflow="scroll"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={article.urlToImage}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="sm">{article.title}</Heading>

                    <Text py="2">{article.description}</Text>
                  </CardBody>
                </Stack>
              </Card>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default News;

//`https://newsapi.org/v2/everything?q=${type}&from=2023-05-17&sortBy=publishedAt&apiKey=3b70b71f8f1c484d9ea3605a8fb5dfdb`
