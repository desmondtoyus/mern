
import React from 'react';
const Highlight = () => {

    return (
        <header style={{ width: '100%', margin: '0px' }}>
<div className="highlights-area">
    <div className="container">
        <div className="row">

            {/* <!-- Highlights Card 1 --> */}
          <div className="col-md-4 higlights" style={{height: '420px', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
                <div className="highlights-card">

                    <div className="highlights-card-content">
                                    <img src="img/resources-icon.svg" alt="resources icon" />
              </div>

                        <span className="highlights-card-title">Resources</span>
                        <div className="line"></div>

                        <p className="highlights-copy">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
                    </div>
                </div>


                {/* <!-- Highlights Card 2 --> */}
          <div className="col-md-4 higlights" style={{height: '420px', paddingLeft: '25px', paddingRight: '15px', position: 'relative', zIndex: '2'}}>
                    <div className="highlights-card">

                        <div className="highlights-card-content">
                                    <img src="img/report-icon.svg" alt="report icon"/>
              </div>

                            <span className="highlights-card-title">Report</span>
                            <div className="line"></div>

                            <p className="highlights-copy">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
                        </div>
                    </div>

                    {/* <!-- Highlights Card 3 --> */}
          <div className="col-md-4 higlights" style={{height: '420px', paddingLeft: '25px', paddingRight: '15px', position: 'relative', zIndex: '2'}}>
                        <div className="highlights-card">

                            <div className="highlights-card-content">
                                    <img src="img/resources-icon.svg" alt="resources icon"/>
              </div>

                                <span className="highlights-card-title">Donate</span>
                                <div className="line"></div>

                                <p className="highlights-copy">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                                    </header>
        )
}

export default Highlight ;