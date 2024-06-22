import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NewsDetails = (props) => {

    const params = useParams();
    console.log(params.sourceId)

    return;

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const getNews = async () => {

        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&q=${params.sourceId}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }

    useEffect(() => {
        getNews()
    }, [params.string])

    return (
        <div>NewsDetails</div>
    )
}

export default NewsDetails