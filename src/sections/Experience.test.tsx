import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from './Experience';

describe('Experience 컴포넌트', () => {
  it('렌더링 확인', () => {
    render(<Experience />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('🏢 경력');
  });

  it('경력 데이터 표시 확인', () => {
    render(<Experience />);
    
    expect(screen.getByText('웹 서버 개발')).toBeInTheDocument();
    expect(screen.getByText('게임 엔진 개발')).toBeInTheDocument();
    expect(screen.getByText('실시간 채팅 및 게임')).toBeInTheDocument();
    expect(screen.getByText('SPA 웹 애플리케이션')).toBeInTheDocument();
  });

  it('직책 정보 표시 확인', () => {
    render(<Experience />);
    
    const positions = screen.getAllByText('개인 프로젝트');
    expect(positions).toHaveLength(4);
  });

  it('기간 정보 표시 확인', () => {
    render(<Experience />);
    
    expect(screen.getAllByText('2022')).toHaveLength(2);
    expect(screen.getAllByText('2021')).toHaveLength(2);
  });

  it('설명 내용 표시 확인', () => {
    render(<Experience />);
    
    expect(screen.getByText(/C\/C\+\+을 사용하여 nginx처럼 동작하는/)).toBeInTheDocument();
    expect(screen.getByText(/ray casting 기술을 자체 구현/)).toBeInTheDocument();
    expect(screen.getByText(/Socket을 사용하여 backend server와/)).toBeInTheDocument();
    expect(screen.getByText(/React 강의 완강 후 SPA 개발/)).toBeInTheDocument();
  });

  it('CSS 클래스 적용 확인', () => {
    render(<Experience />);
    
    const section = screen.getByRole('heading', { level: 2 }).closest('section');
    expect(section).toHaveClass('experience-section');
    
    const experienceList = section?.querySelector('.experience-list');
    expect(experienceList).toBeInTheDocument();
    
    const experienceItems = section?.querySelectorAll('.experience-item');
    expect(experienceItems).toHaveLength(4);
  });
});