import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ActivityIndicator from '../ActivityIndicatorService';

describe('ActivityIndicator', () => {
    it('can initialize and setLoading', () => {
        const setLoading = jest.fn();
        ActivityIndicator.initialize(setLoading);

        expect(ActivityIndicator.setLoading).toBe(setLoading);

        ActivityIndicator.setLoading();

        expect(setLoading).toHaveBeenCalled();
    });
});