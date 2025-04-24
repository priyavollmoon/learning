import React from 'react'


function Home() {
  return (
    <div className="" >
     <div className="card custom-card  flex-column col-auto">
      <div className="card-header">
       <h2>Layout components</h2>
       <div className="card-body">
       <h6 className="card-text">Grid system -<mark>row,col</mark></h6>
       <h6>Break points -<mark>col-sm,col-md,col-lg,col-xl</mark></h6>
       <h6>Column and- Resonsive Layout<mark>col-auto,col-12</mark></h6>
       <h6>Containers -<mark>container,container-fluid</mark></h6>
       <h6>padding and margin-<mark>p-,m-</mark></h6>
       </div>
        
      </div>
    </div>
    <div className=" card custom-card flex-column col-auto">
        <div className="card-header">
          <h2>Content components</h2>
          <div className="card-body text-UpperCase">
            <h6>Typograhy-<mark>h1,h2,h3..</mark></h6>
            <h6>Image-<mark>image-fluid,image-thumbnail</mark></h6>
            <h6>Figure-<mark>figure-caption,figure</mark></h6>

          </div>

      </div>
    </div>
   
    </div>
  )
}

export default Home