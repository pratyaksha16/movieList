import './App.css';
import Header from './content/Header';
import List from './content/List';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import getData from './redux.js/slice/movieData';

function App() {
  const [loader, setLoader] = useState("");
  const [dataList, setDataList] = useState([]);


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const dataLists = useSelector((state) => state.diagnalData.data);
  // const isLoading = useSelector((state) => state.diagnalData.isLoading);

  console.log("State", state);

  useEffect(() => {
    dispatch(getData());
    // setDataList(dataLists);
    // setLoader(isLoading);
}, []);

  // if (loader) {
  //   setLoader(true);
  // }

  const title = dataList && dataList.page && dataList.page.title;

  const handleSearch = (inputValue) => {
    const filteredValues = dataList && dataList.filter((item) =>
              item.name.toLowerCase().indexOf(inputValue) > -1
        )
        setDataList(filteredValues);
  }

  return (
    <div className="container">
      {loader && <p>Loading...</p>} ;
      <Header
        title={title}
        dataList={dataList}
        handleSearch={handleSearch}/>
      <List
        dataList={dataList}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(App);
