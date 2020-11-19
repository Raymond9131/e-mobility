import React, { Component } from 'react'


import SideBar from './SideBar';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MUIDataTable from "mui-datatables";
import ProgressBar from 'react-bootstrap/ProgressBar'



export default class Home extends Component {
    
    render() {
        const columns = [ "Name", "Status", "Connectors", "Instant", "Start time", "Duration of Charging"];

        const data = [
          [ "Stations 1", <span className="green"><i class="fas fa-circle"></i> Connected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
             
              </div>
              <div className="first-co ">
              <span className="acricle fullcolor">2</span>
             
              </div>
              <div className="first-co">
              <span className="acricle">3</span>
             
              </div>
              <div className="first-co">
              <span className="acricle fullcolor">4</span>
             
              </div>
              
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar variant="success" now={100} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div> ],


[ "Stations 2", <span className="green"><i class="fas fa-circle"></i> Connected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
             
              </div>
              <div className="first-co">
              <span className="acricle fullcolor">2</span>
              
              </div>

              <div className="first-co">
              <span className="acricle">3</span>
              
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar variant="danger" now={100} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div>],


[ "Stations 3", <span className="red"><i class="fas fa-circle"></i> Disconnected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
             
              </div>
              <div className="first-co">
              <span className="acricle fullcolor">2</span>
              </div>
              <div className="first-co">
              <span className="acricle">3</span>
              </div>
              <div className="first-co">
              <span className="acricle fullcolor">4</span>
              </div>
              
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar variant="danger" now={100} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div> ],



[ "Stations 4", <span className="green"><i class="fas fa-circle"></i> Connected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle fullcolor">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle ">2</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar variant="success" now={100} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div> ],


[ "Stations 5", <span className="red"><i class="fas fa-circle"></i> Disconnected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle">2</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar  variant="danger" now={100} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div> ],


[ "Stations 6", <span className="green"><i className="fas fa-circle"></i> Connected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle fullcolor">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle">2</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar   variant="danger" now={100} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div> ],


[ "Stations 7", <span className="green"><i className="fas fa-circle"></i> Connected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle fullcolor">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle">2</span>
              </div>
              <div className="first-co">
              <span className="acricle fullcolor">3</span>
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar striped variant="success" now={100} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div>  ],



[ "Stations 8", <span className="green"><i className="fas fa-circle"></i> Connected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle">1</span>
             
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar striped variant="danger" now={45} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div> ],


[ "Stations 9", <span className="red"><i className="fas fa-circle"></i> Disconnected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle">2</span>
             
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar striped variant="success" now={90} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div>  ],


[ "stations 10", <span className="green"><i className="fas fa-circle"></i> Connected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle">2</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar striped variant="danger" now={45} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div> ],


[ "Stations 11", <span className="red"><i className="fas fa-circle"></i> Disconnected</span> , 
          <div className="connects">
              <div className="first-co">
              <span className="acricle">1</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
              <div className="first-co">
              <span className="acricle">2</span>
              {/* <strong><i className="fas fa-surprise"></i></strong> */}
              </div>
          </div>,
           <div className="instant-td">
               0/44.2kw
               <ProgressBar striped variant="success" now={45} />
           </div>, <span>11:30 AM <br/> 19.11.2020</span>, <div className="progress pink">
                        <div className="progress-bar " style={{width:"90%" , background:"#28a745"}}>
                            <div className="progress-value">8 Min</div>
                        </div>
                    </div>],




         
        ];
    
        const options = {
            download:"false",
          filterType: "dropdown",
          responsive: "scroll",
          print:"false",
          expandableRows: true,
          expandableRowsHeader: false,
          renderExpandableRow: (rowData) => {
            
            var final;
            final= rowData.map((r)=>{

                return(
            <TableCell>
            {r}
            </TableCell>
    )
 })

            return (
                

 
    
  <TableRow>
      
  {final}
  </TableRow>


                
            
             
            );
          },
           
        };
        
    
        return (
            <div className="charing">
                <SideBar/>
                <div className="main-content">
<div className="top-header">
 <span className="stations"> <i class="fas fa-charging-station"></i>   charging Station </span>

</div>
<MUIDataTable 
        title={"Owner"}
        data={data}
        columns={columns}
        options={options}
        
      />

                </div>
            </div>
        )
    }
}
