import React from 'react';

const withClass = (WrappedComponent, className) =>{
    return props =>(
        <div className={className}>
            <WrappedComponent {...props} />
            {/* passing unknown props. It will destructure it.. */}
        </div>
    );
};
export default withClass;