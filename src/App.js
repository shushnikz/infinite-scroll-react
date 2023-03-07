import './App.css';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {

  const [data, setData] = useState(Array.from({ length: 20 }))
  const [hasMore, setHasMore] = useState(true)

  const fetchMoreData = () => {
    // making api call
    setTimeout(() => {
      setData(data.concat(Array.from({ length: 20 })))
    }, 500)
  }


  return (
    <div className="App">
      <h1><b>Infinite Scroll Bar</b></h1>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p><b>Loading!..</b></p>}
        height={700}>
        {data.map((item, index) => {
          return <div className='content'>This is a div with Infinite Scroll bar #{index + 1} </div>
        })}

      </InfiniteScroll>
    </div>
  );
}

export default App;
