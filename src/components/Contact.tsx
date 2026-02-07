"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./ui/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 10,
    background: "rgba(20,20,35,0.8)",
    border: "1px solid rgba(212,175,55,0.15)",
    color: "#f0f0f0",
    fontSize: 14,
    fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#D4AF37";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(212,175,55,0.15)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "#0a0a14",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <Reveal direction="up">
          <div className="section-label">
            <span>Contact</span>
          </div>
          <h2 className="section-title">お問い合わせ</h2>
        </Reveal>

        {submitted ? (
          <Reveal direction="scale">
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(107,45,139,0.12), rgba(10,10,20,0.8))",
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: 20,
                padding: 60,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3
                style={{
                  fontSize: 22,
                  color: "#D4AF37",
                  marginBottom: 12,
                  fontWeight: 700,
                }}
              >
                送信完了
              </h3>
              <p style={{ fontSize: 14, color: "#888" }}>
                お問い合わせありがとうございます。
                <br />
                担当者より折り返しご連絡いたします。
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal direction="up" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#ccc",
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  お名前 <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="山田 太郎"
                  required
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#ccc",
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  メールアドレス <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  required
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#ccc",
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  お問い合わせ種別
                </label>
                <select
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23888' stroke-width='2'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 18px center",
                    paddingRight: 48,
                  }}
                  onFocus={handleFocus as React.FocusEventHandler<HTMLSelectElement>}
                  onBlur={handleBlur as React.FocusEventHandler<HTMLSelectElement>}
                >
                  <option value="">選択してください</option>
                  <option value="selection">セレクションについて</option>
                  <option value="practice">練習試合について</option>
                  <option value="sponsor">スポンサーについて</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#ccc",
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  メッセージ <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="お問い合わせ内容をご記入ください"
                  required
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                  onFocus={handleFocus as React.FocusEventHandler<HTMLTextAreaElement>}
                  onBlur={handleBlur as React.FocusEventHandler<HTMLTextAreaElement>}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  borderRadius: 12,
                  padding: "16px 40px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                送信する
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
