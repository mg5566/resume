import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'

describe('Header 컴포넌트', () => {
  const mockProps = {
    name: '강명구',
    title: 'FrontEnd Engineer',
    email: 'mike.kangaroo.world@gmail.com',
    phone: '010-8353-0933',
    github: 'github.com/mg5566'
  }

  it('이름이 올바르게 렌더링된다', () => {
    render(<Header {...mockProps} />)
    expect(screen.getByText('강명구')).toBeInTheDocument()
  })

  it('직업 제목이 올바르게 렌더링된다', () => {
    render(<Header {...mockProps} />)
    expect(screen.getByText('FrontEnd Engineer')).toBeInTheDocument()
  })

  it('연락처 정보가 모두 렌더링된다', () => {
    render(<Header {...mockProps} />)
    expect(screen.getByText('mike.kangaroo.world@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('010-8353-0933')).toBeInTheDocument()
    expect(screen.getByText('github.com/mg5566')).toBeInTheDocument()
  })

  it('github이 없을 때 렌더링되지 않는다', () => {
    const propsWithoutGithub = { ...mockProps, github: undefined }
    render(<Header {...propsWithoutGithub} />)
    expect(screen.queryByText('github.com/mg5566')).not.toBeInTheDocument()
  })

  it('올바른 CSS 클래스가 적용된다', () => {
    render(<Header {...mockProps} />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('resume-header')
  })
})