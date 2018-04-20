import React from 'react';


export function CheeseList(props) {
    const cheeses = props.cheeses.map((cheese, index) => (
        <li key={index}>
          {cheese}
        </li>
      ));
    
      return (
        <ul id="cheeseList" className="cheese">
          {cheeses}
        </ul>
      );
}

export const mapStateToProps = state => ({
    cheeses: state.cheeses
})
  
export default connect(mapStateToProps)(CheeseList);