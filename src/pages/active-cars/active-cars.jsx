import React from 'react';
import { Typography, Grid, FormControl, InputLabel, Select, MenuItem, IconButton, Table, TableContainer, TableBody, TableHead, TableRow, TableCell, } from '@material-ui/core';
import { FaTrash, FaPause, FaPencilAlt, FaMinus, FaThumbsUp  } from 'react-icons/fa';
import { PrimaryTemplate } from '../../template';
import { AdminTemplate } from '../../template';

import  axios  from 'axios';
import { getAllProductsDetailsUrl,deleteProduct } from '../../assets/serverUrls';
import serverHostName from './../../assets/serverHost';
import {Link} from "react-router-dom";


 


class ActiveCars extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
    }

    deleteProduct(id){
        
        const data = this.state.data.filter(singleValue=> singleValue._id !== id);
        axios.get(deleteProduct+id)
        .then(res=>{
            console.log(res);
            this.setState({
                data:data
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    componentDidMount(){
      
         axios.get(getAllProductsDetailsUrl)
         .then(res=>{
             const data = JSON.parse(res.data);
             console.log(data);
            this.setState({
                data:data
            })
         }).catch(err=>{
           
         })
    }
    render(){
        return (
            <PrimaryTemplate>
                <AdminTemplate>
                    <Grid container className="search-filter" alignItems="center">
                        <Grid item sm={6}>
                            <Typography style={{ color: '#cc0000', fontWeight: 700 }}>
                                25 Active Cars
                            </Typography>
                        </Grid>
                        <Grid item sm={6} className="search-filter-select-container">
                            <FormControl variant="outlined" className="search-filter-form" style={{ marginRight: 8 }}>
                                <InputLabel>
                                    Show Room
                                </InputLabel>
                                <Select value={""} labelWidth={90}>
                                    <MenuItem value={10}>All</MenuItem>
                                    <MenuItem value={20}>Near By</MenuItem>
                                    <MenuItem value={30}>Best</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className="search-filter-form">
                                <InputLabel>
                                    Sort By
                                </InputLabel>
                                <Select value={""} labelWidth={55}>
                                    <MenuItem value={10}>Newly Add</MenuItem>
                                    <MenuItem value={20}>Best Selling</MenuItem>
                                    <MenuItem value={30}>Low Rent</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <TableContainer>
                        <Table style={{ width: '99%' }}>
                        <TableHead style={{ backgroundColor: '#09080e', color: '#fff' }}>
                            <TableRow>
                                <TableCell style={{color: '#fff' }}>Model</TableCell>
                                <TableCell style={{color: '#fff' }}>Year</TableCell>
                                <TableCell style={{color: '#fff' }}>Showroom</TableCell>
                                <TableCell style={{color: '#fff' }}>Rent</TableCell>
                                <TableCell style={{color: '#fff' }}>Remove</TableCell>
                            </TableRow>
                        </TableHead>

                       

                        <TableBody>

                            {
                                this.state.data.map((singleValue)=>(
                                
                              


                            <TableRow key={singleValue._id}>
                                <TableCell style={{ border: '1px solid #ddd' }}>
                                <Grid container spacing={2}>
                                    <Grid item md = {5} lg={4}>
                                        <img 
                                            className = "product-img"
                                           // src="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202018/Cars/November/CR-Cars-InlineHero-2019-Honda-Insight-driving-trees-11-18" 
                                            src={serverHostName+singleValue.imagePath} 
                                            alt={singleValue.name}
                                        />
                                    </Grid>
                                    <Grid item md={7} lg = {8}>
                                        <div className="product-title-container">
                                            <span> {singleValue.title}</span>
                                        </div>
                                        <div className="product-desc-container">
                                            <Typography>
                                               { singleValue.descriptions}
                                            </Typography>
                                        </div>
                                        <div className="product-action-btns-container">
                                           <Link to={`/edit-products/`+singleValue._id}> <IconButton 
                                                className   =   "car-btns product-action-btn-margin"
                                                
                                                >
                                                <FaPencilAlt />
                                            </IconButton>
                                            </Link>

                                            <IconButton 
                                                className   =   "car-btns product-action-btn-margin">
                                                <FaPause />
                                            </IconButton>

                                            <IconButton 
                                                className   =   "car-btns product-action-btn-margin">
                                                <FaMinus />
                                            </IconButton>

                                            <IconButton 
                                                className   =   "car-btns product-action-btn-margin">
                                                <FaThumbsUp />
                                            </IconButton>
                                        </div>
                                    </Grid>
                                </Grid>
                                </TableCell>
                                <TableCell style={{ border: '1px solid #ddd' }}>2018</TableCell>
                                <TableCell style={{ border: '1px solid #ddd' }}>Showroom</TableCell>
                                <TableCell style={{ border: '1px solid #ddd' }}>Rent</TableCell>
                                <TableCell style={{ border: '1px solid #ddd' }}>
                                    <IconButton onClick={()=>{
                                            this.deleteProduct(singleValue._id)
                                        }}>
                                        <FaTrash  />
                                    </IconButton>
                                </TableCell>
                            </TableRow>


                ))} 

                            



                        </TableBody>
                        </Table>
                    </TableContainer>

                    

                </AdminTemplate>
            </PrimaryTemplate>
        )
    }
}

export default ActiveCars;