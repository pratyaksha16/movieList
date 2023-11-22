
const List = ({dataList}) => {

  return (
        <div className='content'>{(dataList || []).map((item) => {
            return (
            <>
                <div key={item.id} className='box'>
                <img 
                    className="image" 
                    src={'https://test.create.diagnal.com/images/' + item['poster-image']}
                    alt={''}
                    loading='lazy'></img>
                <div className='text'>{item.name}</div>
                </div>
            </>
            );
        })
        }
        </div>
  )
}

export default List;

