import { expect } from 'chai';
import * as actions from '../lib/redux-modals';

describe('setActive action', () => {
    it('should create an action to set a modal to active', () => {
        const modalName = 'test modal';
        const expectedAction = {
            type: actions.types.SET_ACTIVE,
            modalName
        };
        expect(JSON.stringify(actions.setActive(modalName))).to.equal(
           JSON.stringify(expectedAction)
       );
    })
});

describe('setInactive action', () => {
    it('should create an action to set a modal to inactive', () => {
        const modalName = 'test modal';
        const expectedAction = {
            type: actions.types.SET_INACTIVE,
            modalName
        };
        expect(JSON.stringify(actions.setInactive(modalName))).to.equal(
            JSON.stringify(expectedAction)
        );
    })
});
