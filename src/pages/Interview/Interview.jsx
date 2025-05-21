import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

const markdownText = `
# 面试流程说明
1. 阅读本引导说明
2. 输入你的 GitHub ID 和邮箱接受挑战
3. 完成挑战后提交 GitHub 仓库 URL 和 Vercel 在线体验地址
`;

const Interview = ({ onNext }) => {
  return (
    <div className="interview-guide-container">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
      <button className="next-button" onClick={onNext}>下一步</button>
    </div>
  );
};

export default Interview;