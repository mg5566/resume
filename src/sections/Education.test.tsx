import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Education from './Education';

describe('Education 컴포넌트', () => {
  it('렌더링 확인', () => {
    render(<Education />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('🎓 학력');
  });

  it('학교 정보 표시 확인', () => {
    render(<Education />);
    
    expect(screen.getByText('4년제 대학교')).toBeInTheDocument();
  });

  it('전공 정보 표시 확인', () => {
    render(<Education />);
    
    expect(screen.getByText('컴퓨터공학과')).toBeInTheDocument();
  });

  it('기간 정보 표시 확인', () => {
    render(<Education />);
    
    expect(screen.getByText('2018.03 - 2022.02')).toBeInTheDocument();
  });

  it('학위 정보 표시 확인', () => {
    render(<Education />);
    
    expect(screen.getByText('학사 졸업')).toBeInTheDocument();
  });

  it('CSS 클래스 적용 확인', () => {
    render(<Education />);
    
    const section = screen.getByRole('heading', { level: 2 }).closest('section');
    expect(section).toHaveClass('education-section');
    
    const educationList = section?.querySelector('.education-list');
    expect(educationList).toBeInTheDocument();
    
    const educationItem = section?.querySelector('.education-item');
    expect(educationItem).toBeInTheDocument();
    
    const educationHeader = section?.querySelector('.education-header');
    expect(educationHeader).toBeInTheDocument();
    
    const educationDetails = section?.querySelector('.education-details');
    expect(educationDetails).toBeInTheDocument();
  });
});