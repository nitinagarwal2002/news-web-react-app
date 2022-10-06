
import React from 'react'

export default function NewsItem(props) {

    let { title, description,imageUrl,newsUrl} = props;
    return (
      <div className="rounded  overflow-hidden shadow-lg " >
        <img
          className="align-middle p-4 "
          src={imageUrl}
        />
        <div className="px-2 py-1" >
          <div className="font-bold font-serif text-x1">{title}</div>
          <p className="text-base">{description}</p>
        </div>
        <div className='p-4'>
        <button className="bg-blue-500  hover:bg-blue-400 text-white font-bold p-1 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <a href={newsUrl} target="_blank" className="text-white">
            READ MORE...
          </a>
        </button>
        </div>
      </div>
    );
  }
