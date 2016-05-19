import { expect } from 'chai';
import * as actions from '../lib/redux-modals';
import { modals } from '../lib/redux-modals';

describe('modals reducer', () => {
    const initialState = {
        active: []
    };

    it('should return the initial state', () => {
        const res = modals(undefined, {});
        expect(JSON.stringify(res)).to.equal(
            JSON.stringify(initialState)
        );
    });

    it('should handle invalid type', () => {
        expect(JSON.stringify(
            modals(initialState, 'THIS IS NOT A REAL TYPE !@#$$#!@')
        )).to.equal(JSON.stringify(initialState));
    });

    it('should handle SET_ACTIVE', () => {
        expect(JSON.stringify(modals(initialState, actions.setActive('first modal')))).to.equal(
            JSON.stringify({ active: ['first modal'] })
        );

        expect(JSON.stringify(
            modals({ active: ['first modal'] }, actions.setActive('second modal'))
        )).to.equal(
            JSON.stringify({ active: ['first modal', 'second modal'] })
        );
    });

    it('should handle SET_INACTIVE', () => {
        expect(JSON.stringify(
            modals(initialState, actions.setInactive('first modal'))
        )).to.equal(
            JSON.stringify(initialState)
        );

        expect(JSON.stringify(
            modals({ active: ['first modal'] }, actions.setInactive('first modal'))
        )).to.equal(
            JSON.stringify(initialState)
        );

        expect(JSON.stringify(
            modals({ active: ['first modal', 'second modal'] }, actions.setInactive('first modal'))
        )).to.equal(
            JSON.stringify({ active: ['second modal'] })
        );

        expect(JSON.stringify(
            modals({ active: ['first modal', 'second modal'] }, actions.setInactive('second modal'))
        )).to.equal(
            JSON.stringify({ active: ['first modal'] })
        );

        expect(JSON.stringify(
            modals({ active: ['first modal', 'second modal', 'third modal'] }, actions.setInactive('second modal'))
        )).to.equal(
            JSON.stringify({ active: ['first modal', 'third modal'] })
        );
    });
});
