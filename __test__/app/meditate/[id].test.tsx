
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { TimerContext } from '@/context/TimerContext';
import Meditate from '@/app/meditate/[id]';
import { router } from 'expo-router';
import { Audio } from 'expo-av';

// Mock the necessary parts
jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
    back: jest.fn(),
  },
  useLocalSearchParams: jest.fn().mockReturnValue({ id: '1' }),
}));

jest.mock('expo-av', () => ({
  Audio: {
    Sound: {
      createAsync: jest.fn().mockResolvedValue({
        sound: {
          playAsync: jest.fn(),
          pauseAsync: jest.fn(),
          unloadAsync: jest.fn(),
          getStatusAsync: jest.fn().mockResolvedValue({ isLoaded: true }),
        },
      }),
    },
  },
}));

jest.mock('@/constants/meditation-images', () => [require('@/assets/meditation1.jpg')]);
jest.mock('@/constants/meditation-data', () => ({
  MEDITATION_DATA: [{ audio: 'meditation_audio.mp3' }],
  AUDIO_FILES: { 'meditation_audio.mp3': require('@/assets/meditation_audio.mp3') },
}));

describe('Meditate Component', () => {
  const setDuration = jest.fn();
  const mockContextValue = { duration: 10, setDuration };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and handles the meditation session', async () => {
    const { getByText, getByRole } = render(
      <TimerContext.Provider value={mockContextValue}>
        <Meditate />
      </TimerContext.Provider>
    );

    // Verify initial render
    expect(getByText('00:10')).toBeTruthy();
    expect(getByText('Start Meditation')).toBeTruthy();

    // Start meditation
    fireEvent.press(getByText('Start Meditation'));
    await waitFor(() => {
      expect(setDuration).toHaveBeenCalledWith(9);
    });

    // Stop meditation
    fireEvent.press(getByText('STOP'));
    await waitFor(() => {
      expect(setDuration).toHaveBeenCalledWith(10);
    });
  });

  it('adjusts meditation duration', () => {
    const { getByText } = render(
      <TimerContext.Provider value={mockContextValue}>
        <Meditate />
      </TimerContext.Provider>
    );

    fireEvent.press(getByText('Adjust duration'));
    expect(router.push).toHaveBeenCalledWith('/(model)/adjust-meditation-duration');
  });
});
