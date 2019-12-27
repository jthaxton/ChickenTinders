import React, { useEffect, useState } from 'react';
import  {connect}  from 'react-redux';
import { refreshPendingInterests } from '../actions/actions';
import { bindActionCreators } from 'redux';

const Dashboard = ({...props}) => {
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    if (!fetched) {
      props.refreshPendingInterests();
      setFetched(true);
    }
  })
  return (
<table>
  <tr>
    <td>
      Restaurant
    </td>
    <td>
      Interest Created Date
    </td>
  </tr>
  {props.pendingInterests && props.pendingInterests.map(interest => 
     (
      <tr>
        <td>
          {interest.restaurant_name}
        </td>
        <td>
          {interest.created_at}
        </td>
      </tr>
    )
  )}
</table>
  )
}

const mapStateToProps = state => {
  return {
      token: state.auth.token.token,
      pendingInterests: state.dashboard.pendingInterests,
  };
}

const mapDispatchToProps = dispatch => {
  return (
      bindActionCreators({
        refreshPendingInterests,
      }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);