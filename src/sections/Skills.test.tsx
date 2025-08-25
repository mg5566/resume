import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from './Skills';

describe('Skills 컴포넌트', () => {
  it('렌더링 확인', () => {
    render(<Skills />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('🛠️ 기술 스택');
  });

  it('기술 카테고리 표시 확인', () => {
    render(<Skills />);
    
    expect(screen.getByText('언어')).toBeInTheDocument();
    expect(screen.getByText('프론트엔드')).toBeInTheDocument();
    expect(screen.getByText('배포')).toBeInTheDocument();
    expect(screen.getByText('개발 도구')).toBeInTheDocument();
    expect(screen.getByText('기타')).toBeInTheDocument();
  });

  it('언어 기술 표시 확인', () => {
    render(<Skills />);
    
    expect(screen.getByText('C/C++')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('프론트엔드 기술 표시 확인', () => {
    render(<Skills />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('배포 관련 기술 표시 확인', () => {
    render(<Skills />);
    
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('Firebase')).toBeInTheDocument();
    expect(screen.getByText('Vercel')).toBeInTheDocument();
  });

  it('개발 도구 표시 확인', () => {
    render(<Skills />);
    
    expect(screen.getByText('VSCode')).toBeInTheDocument();
    expect(screen.getByText('Vim')).toBeInTheDocument();
  });

  it('기타 기술 표시 확인', () => {
    render(<Skills />);
    
    expect(screen.getByText('Linux')).toBeInTheDocument();
    expect(screen.getByText('Git/GitHub')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Firebase Realtime DB')).toBeInTheDocument();
  });

  it('CSS 클래스 적용 확인', () => {
    render(<Skills />);
    
    const section = screen.getByRole('heading', { level: 2 }).closest('section');
    expect(section).toHaveClass('skills-section');
    
    const skillsGrid = section?.querySelector('.skills-grid');
    expect(skillsGrid).toBeInTheDocument();
    
    const skillGroups = section?.querySelectorAll('.skill-group');
    expect(skillGroups).toHaveLength(5);
    
    const skillItems = section?.querySelectorAll('.skill-item');
    expect(skillItems?.length).toBeGreaterThan(0);
  });
});