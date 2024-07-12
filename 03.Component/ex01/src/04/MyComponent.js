import React from 'react';
import {PropTypes} from 'prop-types';

function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}) {
    return (
        <div>
            <h2>Property Validation</h2>
            <span>props01: {typeof(props01)!=='undefined' ? props01 : "---not set---" }</span>
            <br/>
            <span>props02: {props02}</span>
            <br/>
            <span>props03: {props03 === true ? 'true' : 'false'}</span>
            <br/>
            <span>props04: {props04.name}</span>
            <br/>
            <span>props05: {props05.map((e, i) => <b key= {i}>{(i+1) + " : "+ e + ", "}</b>)}</span>
            <br/>
            <span>props06: {typeof(props06) !== 'undefined' ? props06() : 'undefined'}</span>
            <br/>
            <span>props07: {props07}</span>
            <br/>
            <span>props08: {typeof(props08) !== 'undefined' ? props08.map((e, i) => <b key={i}>{`${i}:${e} `}</b>): 'undefined'}</span>
            <br/>
            <span>props09: {props09.no + props09.name + props09.email}</span>
            <br/>
            
        </div>
    );
}

MyComponent.PropTypes = {
    // JavaScript DataType 
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.function,

    /* combination */     
    props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({
        no: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}

MyComponent.defaultProps = {
    props02 : 10,
    props03 : false
}
export default MyComponent;