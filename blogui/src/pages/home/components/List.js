// import React, { PureComponent } from 'react';
// // import { ListItem, ListInfo, LoadMore } from '../style';
// import { connect } from 'react-redux';
// // import { actionCreators } from '../store';
// import { Link } from 'react-router-dom';

// class List extends PureComponent {
// 	render() {
// 		const { list } = this.props;
// 		return (
// 			<div>
// 				{
// 					list.map((item, index) => {
// 						return (
// 							<Link key={index} to={'/detail/' + item.get('id')}>
                                
// 								<h3 className='title'>{item.get('title')}</h3>
// 								<p className='desc'>{item.get('description')}</p>
								
// 							</Link>
// 						);
// 					})
// 				}
// 			</div>
// 		)
// 	}
// }


// export default connect()(List);