import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../store/store";

import {
  changeUser,
} from "../store/userSlice";

function ReduxUser() {

  const name = useSelector(
    (state: RootState) =>
      state.user.name
  );

  const dispatch = useDispatch();

  return (
    <div className="card">
      <span className="badge">Profile State</span>

      <h2 style={{ marginTop: 10 }}>User: {name}</h2>

      <p className="muted">
        Click to swap the displayed Redux user.
      </p>

      <button
        className="btn"
        onClick={() =>
          dispatch(changeUser("Satya Sai"))
        }
      >
        Change User
      </button>
    </div>
  );
}

export default ReduxUser;