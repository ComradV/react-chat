import React, { Component } from 'react';

function greeting({greeting, children}) {
  return <p className = "testp">{greeting}, react! {children}</p>
  
}

export default greeting;