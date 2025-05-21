import React, { useState } from 'react';
import './index.css';

const AcceptChallenge = ({ onNext }) => {
  const [githubId, setGithubId] = useState('');
  const [email, setEmail] = useState('');
  // 用于存储验证错误信息
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    // 验证 GitHub ID 是否为空
    if (!githubId.trim()) {
      newErrors.githubId = 'GitHub ID 不能为空';
    }
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = '邮箱不能为空';
    } else if (!emailRegex.test(email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    setErrors(newErrors);
    // 如果没有错误，返回 true，否则返回 false
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 验证通过，执行下一步逻辑
      onNext();
    }
  };

  return (
    <div className="accept-challenge-container">
      <h2 className="accept-challenge-title">接受挑战</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="GitHub ID"
          value={githubId}
          onChange={(e) => setGithubId(e.target.value)}
        />
        <div className="error-message-container">
          {errors.githubId && <p className="error-message">{errors.githubId}</p>}
        </div>
        <input
          className="input-field"
          type="email"
          placeholder="邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="error-message-container">
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <button className="submit-button" type="submit">接受挑战</button>
      </form>
    </div>
  );
};

export default AcceptChallenge;