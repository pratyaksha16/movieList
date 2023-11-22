import './App.css';
import Header from './content/Header';
import List from './content/List';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import {useDispatch, useSelector } from 'react-redux';
// import getData from './redux/slice/movieData';

function App() {
  // const [loader, setLoader] = useState("");
  const [dataList, setDataList] = useState([]);
  const [title, setTitle] = useState("");

  const getMovieData = (data) => {
    if (data && data.page && data.page['content-items'] && data.page['content-items']['content']) {
            return data.page['content-items']['content'];
        }
        return [];
  }

  const getTitle = (data) => {
    return data && data.page && data.page.title;
  }

  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // const dataLists = useSelector((state) => state..data);
  // setDataList(dataLists);
  // const isLoading = useSelector((state) => state.isLoading);
  // const title = useSelector((state) => state.title);

  useEffect(() => {
    // dispatch(getData());
    // setDataList(dataLists);
    // setLoader(isLoading);
    axios.get('https://test.create.diagnal.com/data/page1.json')
    .then((response) => {
      setDataList(getMovieData(response.data));
      setTitle(getTitle(response.data));
    })
}, []);

  // if (loader) {
  //   setLoader(true);
  // }


  const handleSearch = (inputValue) => {
    const filteredValues = dataList && dataList.filter((item) =>
              item.name.toLowerCase().indexOf(inputValue) > -1
        )
        setDataList(filteredValues);
  }

  return (
    <div className="container">
      {/* {isLoading && <p>Loading...</p>} ; */}
      <Header
        title={title}
        dataList={dataList}
        handleSearch={handleSearch}/>
      <List
        dataList={dataList}/>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   data: state.data,
//   loading: state.loading,
//   error: state.error,
// });

export default App;
