import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';
import { EnquiryModal } from '../components/EnquiryModal';
import { ContactPage } from '../pages/ContactPage';

describe('VASUNDHARA DIARY AND FARMS — Component & Integration Tests', () => {
  
  it('renders brand logo and navigation items correctly', () => {
    render(<App />);
    
    // Check Brand Name in Navbar
    const brandTitles = screen.getAllByText(/VASUNDHARA/i);
    expect(brandTitles.length).toBeGreaterThan(0);
    
    const brandSubnames = screen.getAllByText(/DIARY AND FARMS/i);
    expect(brandSubnames.length).toBeGreaterThan(0);

    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(within(nav).getByRole('button', { name: /^Home$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /^About Us$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /^Our Farm$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /^Products$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /^Sustainability$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /^Contact$/i })).toBeInTheDocument();
  });

  it('renders Hero Section with dynamic heading and statistics bar', () => {
    render(<App />);

    // Check Hero and ticker
    const natureHeadings = screen.getAllByText(/Where Nature Meets/i);
    expect(natureHeadings.length).toBeGreaterThan(0);

    // Check Floating Statistics Bar
    expect(screen.getAllByText(/5\.5 Acres/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/20 Planned/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Modern Dairy/i).length).toBeGreaterThan(0);

    // Check continuous ticker contact details
    const emailMatches = screen.getAllByText(/bharathkm@gmail\.com/i);
    expect(emailMatches.length).toBeGreaterThan(0);

    const phoneMatches = screen.getAllByText(/\+91 80880 50628/i);
    expect(phoneMatches.length).toBeGreaterThan(0);
  });

  it('renders all 5 product cards in offerings section', () => {
    render(<App />);

    expect(screen.getByText(/Complete Dairy Solutions Under One Roof/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Fresh Cow Milk$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Curd \(Dahi\)$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Paneer \(Cottage Cheese\)$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Traditional Ghee$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Dairy Farming Support$/i })).toBeInTheDocument();
  });

  it('navigates seamlessly across all 6 pages using navbar buttons', async () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: /main navigation/i });

    // Navigate to About Us
    const aboutBtn = within(nav).getByRole('button', { name: /^About Us$/i });
    fireEvent.click(aboutBtn);
    expect(screen.getByText(/Rooted In The Land\./i)).toBeInTheDocument();
    expect(screen.getByText(/Our Six Core Values/i)).toBeInTheDocument();

    // Navigate to Our Farm
    const farmBtn = within(nav).getByRole('button', { name: /^Our Farm$/i });
    fireEvent.click(farmBtn);
    expect(screen.getByText(/Discover Our Modern/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Holstein Friesian \(HF\)/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Jersey Cattle/i).length).toBeGreaterThan(0);

    // Navigate to Products
    const productsBtn = within(nav).getByRole('button', { name: /^Products$/i });
    fireEvent.click(productsBtn);
    expect(screen.getByText(/Freshness Inspired/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Quality Commitment/i)).toBeInTheDocument();

    // Navigate to Sustainability
    const sustBtn = within(nav).getByRole('button', { name: /^Sustainability$/i });
    fireEvent.click(sustBtn);
    expect(screen.getByText(/Growing Responsibly\./i)).toBeInTheDocument();
    expect(screen.getByText(/Responsible Animal Care/i)).toBeInTheDocument();
    expect(screen.getByText(/Future Development Roadmap/i)).toBeInTheDocument();

    // Navigate to Contact
    const contactBtn = within(nav).getByRole('button', { name: /^Contact$/i });
    fireEvent.click(contactBtn);
    expect(screen.getByText(/Let's Connect &/i)).toBeInTheDocument();
    expect(screen.getByText(/Direct Communication Channels/i)).toBeInTheDocument();
  });

  it('validates contact form and handles successful submission', async () => {
    render(<ContactPage onNavigate={() => {}} />);

    const submitBtn = screen.getByRole('button', { name: /Send Enquiry/i });

    // Submit without input triggers validation errors
    fireEvent.click(submitBtn);
    expect(screen.getByText(/Please enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please provide an email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Please provide a contact phone number/i)).toBeInTheDocument();

    // Fill valid data
    const nameInput = screen.getByPlaceholderText(/e\.g\. Vikram Joshi/i);
    const emailInput = screen.getByPlaceholderText(/e\.g\. vikram@example\.com/i);
    const phoneInput = screen.getByPlaceholderText(/e\.g\. \+91 80880 50628/i);
    const messageInput = screen.getByPlaceholderText(/Please detail your request/i);

    fireEvent.change(nameInput, { target: { value: 'Rajesh Patil' } });
    fireEvent.change(emailInput, { target: { value: 'rajesh@patilfarms.com' } });
    fireEvent.change(phoneInput, { target: { value: '+91 98765 12345' } });
    fireEvent.change(messageInput, { target: { value: 'Inquiring regarding planned organic fodder collaboration and bulk milk distribution.' } });

    fireEvent.click(submitBtn);

    // Wait for success screen
    await waitFor(() => {
      expect(screen.getByText(/Enquiry Successfully Sent!/i)).toBeInTheDocument();
      expect(screen.getByText(/Reference Code/i)).toBeInTheDocument();
      expect(screen.getByText(/Continue to WhatsApp/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('opens and closes the Enquiry Modal properly', () => {
    const handleClose = vi.fn();
    const { rerender } = render(
      <EnquiryModal isOpen={true} onClose={handleClose} initialType="Dairy Product Enquiry" />
    );

    expect(screen.getByText(/Vasundhara Connect Portal/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close modal/i })).toBeInTheDocument();

    // Click Close Button
    fireEvent.click(screen.getByRole('button', { name: /Close modal/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);

    // Rerender as closed
    rerender(<EnquiryModal isOpen={false} onClose={handleClose} />);
    expect(screen.queryByText(/Vasundhara Connect Portal/i)).not.toBeInTheDocument();
  });

});
