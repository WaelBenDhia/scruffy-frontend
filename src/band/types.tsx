import {
  IBand,
  Loadable,
  Failable,
  makeFailableActionCreators,
} from '../shared';

interface IBandRequest {
  vol: string;
  url: string;
}

type State = Loadable<IBand>;

const GET_BND = '[Band] Get band';
const DON_BND = '[Band] Get band done';

interface IGetBandAction {
  type: '[Band] Get band';
  req: IBandRequest;
}

const makeGetBandAction =
  (partialUrl: string) => ({
    type: GET_BND,
    req: {
      vol: partialUrl.split('/')[2],
      url: partialUrl.split('/')[3].split('.')[0],
    }
  });

interface IGetBandDone {
  type: '[Band] Get band done';
  payload: Failable<IBand>;
}

const [makeGetBandSuccess, makeGetBandFailed] =
  makeFailableActionCreators<IBand>(DON_BND);

type Action = IGetBandAction | IGetBandDone;

export {
  IBandRequest,
  State,
  Action,
  GET_BND,
  IGetBandAction,
  makeGetBandAction,
  DON_BND,
  makeGetBandSuccess,
  makeGetBandFailed,
};
