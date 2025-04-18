import { render, screen } from '@testing-library/react';
import Home from '../../../app/page';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: any) => children,
  SwiperSlide: ({ children }: any) => children,
}));

jest.mock('swiper/css', () => jest.fn());
jest.mock('swiper/css/effect-fade', () => jest.fn());
jest.mock('swiper/css/navigation', () => jest.fn());
jest.mock('swiper/css/pagination', () => jest.fn());
jest.mock('swiper/modules', () => jest.fn());

describe('Home', () => {
  it('renders the HeroSlider with the correct slides', () => {
    render(<Home />);

    // Check if the Swiper component renders
    const swiperElement = screen.getByRole('region'); // Assuming `Swiper` is rendered as a region
    expect(swiperElement).toBeInTheDocument();

    // Check if both slides are rendered
    const slides = screen.getAllByRole('listitem'); // Assuming `SwiperSlide` elements are list items
    expect(slides).toHaveLength(2); // Should be 2 slides in your code
  });
});
