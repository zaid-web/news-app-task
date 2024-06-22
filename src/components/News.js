import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const capitalizedtitle = (category) => {

    return category[0].toUpperCase() + category.substr(1);

  }

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [headline, setHeadline] = useState('');

  /* SEARCH NEWS FILTER */
  const [textInput, setTextInput] = useState('');
  const [searchButton, setSearchButton] = useState(0);

  const handleSearchClick = async () => {

    if (textInput !== '') {
      setSearchButton(1);

    }
  }

  const handleSearchChange = (event) => {
    setTextInput(event.target.value);
  }
  /* SEARCH CODE ENDS */

  const updateNews = async () => {

    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    setHeadline(`News - Top ${capitalizedtitle(props.category)} Headlines!`)
    props.setProgress(100);

  }

  const updateSearchNews = async () => {

    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&q=${textInput}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    if (parseData.totalResults === 0) {
      setHeadline(`No Results Found!`)
    }
    else {

      setHeadline(`News - Top ${capitalizedtitle(textInput)} Headlines!`)
    }
    props.setProgress(100);

  }

  const fetchMoreData = () => {

    setTimeout(async () => {
      setPage(page + 1);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults);
      setLoading(false);
    }, 500);

  }

  useEffect(() => {

    setSearchButton(0);
    if (textInput !== '') {
      updateSearchNews();
    }
    else {

      updateNews();

    }

  }, [searchButton]);

  return (
    <>
      <div className="container-sm d-flex align-items-center justify-content-center mt-3" style={{ maxWidth: 700 }}>
        <input className="form-control me-2" onChange={handleSearchChange} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" onClick={handleSearchClick} type="button">Search</button>
      </div>

      <h1 className="mb-3 my-3 mx-5 text-center">{headline}</h1>


      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, i) =>

              <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} source={element.source.name} publishedAt={element.publishedAt} />
              </div>

            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',
}

News.propTypes = {

  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,

}

export default News