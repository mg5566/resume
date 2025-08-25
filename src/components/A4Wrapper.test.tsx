import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import A4Wrapper from './A4Wrapper'

describe('A4Wrapper 컴포넌트', () => {
  it('자식 요소들이 올바르게 렌더링된다', () => {
    render(
      <A4Wrapper>
        <div>테스트 내용</div>
      </A4Wrapper>
    )
    expect(screen.getByText('테스트 내용')).toBeInTheDocument()
  })

  it('올바른 CSS 클래스가 적용된다', () => {
    render(
      <A4Wrapper>
        <div data-testid="content">테스트</div>
      </A4Wrapper>
    )
    const wrapper = screen.getByTestId('content').parentElement
    expect(wrapper).toHaveClass('a4')
  })

  it('여러 자식 요소들을 올바르게 렌더링한다', () => {
    render(
      <A4Wrapper>
        <h1>제목</h1>
        <p>내용</p>
        <div>추가 내용</div>
      </A4Wrapper>
    )
    expect(screen.getByText('제목')).toBeInTheDocument()
    expect(screen.getByText('내용')).toBeInTheDocument()
    expect(screen.getByText('추가 내용')).toBeInTheDocument()
  })

  it('A4 형식 토글이 올바르게 동작한다', async () => {
    const user = userEvent.setup()
    render(
      <A4Wrapper>
        <div data-testid="content">테스트</div>
      </A4Wrapper>
    )
    
    const toggleButton = screen.getByText('A4 형식 해제')
    const wrapper = screen.getByTestId('content').parentElement
    
    // 초기 상태에서는 a4 클래스가 있어야 함
    expect(wrapper).toHaveClass('a4')
    
    // 버튼 클릭 후 a4 클래스가 제거되어야 함
    await user.click(toggleButton)
    expect(wrapper).not.toHaveClass('a4')
    expect(screen.getByText('A4 형식으로 보기')).toBeInTheDocument()
    
    // 다시 클릭하면 a4 클래스가 다시 추가되어야 함
    await user.click(screen.getByText('A4 형식으로 보기'))
    expect(wrapper).toHaveClass('a4')
    expect(screen.getByText('A4 형식 해제')).toBeInTheDocument()
  })
})