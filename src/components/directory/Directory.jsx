import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from '../menu-item/MenuItem';

import './Directory.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
      {sections.map(({id , ...otherSectionData})=>(
          <MenuItem key={id} {...otherSectionData }/>
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector ({
  sections : selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
