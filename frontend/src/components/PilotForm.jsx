import React, { useState } from 'react';

export default function PilotForm({ t }) {
  const [formData, setFormData] = useState({
    fullName: '',
    farmName: '',
    phone: '',
    email: '',
    location: 'Beni Khaled',
    surface: '',
    interest: 'Tester le prototype',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        full_name: formData.fullName,
        farm_name: formData.farmName || null,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        surface_ha: formData.surface ? parseFloat(formData.surface) : null,
        interest: formData.interest,
        message: formData.message || null
      };

      const res = await fetch('/api/pilot/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        setReferenceId(data.reference_id);
        setStatus('success');
      } else {
        const err = await res.json().catch(() => ({}));
        setErrorMessage(err.detail || 'Erreur lors de la transmission. Veuillez réessayer.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Connexion au serveur impossible. Veuillez vérifier votre réseau ou nous écrire directement par courriel.');
      setStatus('error');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid reveal">
          
          {/* Institutional Contact Info */}
          <div className="contact-info-panel">
            <div className="section-tag">{t.contact.tag}</div>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="contact-lead">{t.contact.lead}</p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="ci-icon">📍</div>
                <div>
                  <strong>Bassin d'Étude & Prototypage</strong>
                  <p>ORCHIVA Technologies · Cap Bon / Gouvernorat de Nabeul<br />Beni Khaled · Menzel Bouzelfa · Grombalia · Soliman</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">✉️</div>
                <div>
                  <strong>Courriel de l'Équipe Fondatrice</strong>
                  <p><a href="mailto:contact@orchiva.tn">contact@orchiva.tn</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">💬</div>
                <div>
                  <strong>Échange Direct</strong>
                  <p>Formulaire ci-contre avec réponse sous 48h ouvrées par un ingénieur du projet.</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">🔬</div>
                <div>
                  <strong>Statut Actuel</strong>
                  <p>Startup d'ingénierie en phase de développement. Prototypage matériel et tests de banc d'essai en cours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="institutional-form">
                <div className="form-title">{t.contact.formHeader}</div>

                {status === 'error' && (
                  <div className="form-alert error" style={{ background: '#FDF2F2', border: '1px solid #F8B4B4', color: '#9B1C1C', padding: '12px 16px', borderRadius: '6px', marginBottom: '20px', fontSize: '13px' }}>
                    {errorMessage}
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label>{t.contact.name}</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="ex. Mohamed Ben Salem" 
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.farm}</label>
                    <input 
                      type="text" 
                      name="farmName"
                      value={formData.farmName}
                      onChange={handleChange}
                      placeholder="ex. Verger familial ou exploitation" 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>{t.contact.phone}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+216 ..." 
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.email}</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@domaine.tn" 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>{t.contact.location}</label>
                    <select name="location" value={formData.location} onChange={handleChange}>
                      <option value="Beni Khaled">Beni Khaled</option>
                      <option value="Menzel Bouzelfa">Menzel Bouzelfa</option>
                      <option value="Nabeul">Nabeul</option>
                      <option value="Grombalia">Grombalia</option>
                      <option value="Soliman">Soliman</option>
                      <option value="Autre région">Autre région en Tunisie</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{t.contact.surface}</label>
                    <input 
                      type="number" 
                      name="surface"
                      step="0.5"
                      min="0"
                      value={formData.surface}
                      onChange={handleChange}
                      placeholder="ex. 4.5" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.contact.interest}</label>
                  <select name="interest" value={formData.interest} onChange={handleChange}>
                    <option value="Tester le prototype">{t.contact.interestOpt1}</option>
                    <option value="Partager retours irrigation">{t.contact.interestOpt2}</option>
                    <option value="Partenariat technique">{t.contact.interestOpt3}</option>
                    <option value="Information générale">{t.contact.interestOpt4}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>{t.contact.message}</label>
                  <textarea 
                    rows="3" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Précisions sur votre verger (variété d'agrumes, système d'arrosage actuel) ou questions..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block btn-lg"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? t.contact.submitting : t.contact.submit}
                </button>

                <div className="form-notice">{t.contact.notice}</div>
              </form>
            ) : (
              <div className="form-feedback success">
                <div className="feedback-icon">✓</div>
                <h3>{t.contact.successTitle}</h3>
                <p>{t.contact.successDesc}</p>
                {referenceId && (
                  <div style={{ marginTop: '16px', fontFamily: 'var(--font-mono)', fontSize: '12px', background: '#FFFFFF', padding: '8px 12px', borderRadius: '4px', display: 'inline-block', border: '1px solid #DCE6DE' }}>
                    Référence : <strong>{referenceId}</strong>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
