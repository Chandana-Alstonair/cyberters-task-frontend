export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  templateId: string;
  certificateNumber: string;
  issuedAt: string;
  expiresAt?: string;
  status: 'active' | 'revoked' | 'expired';
  blockchainHash?: string;
  verificationCode: string;
  qrCode?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  design: {
    logo?: string;
    signatures?: string[];
    layout: string;
  };
  expiryDuration?: number;
  requiresRecertification: boolean;
  isActive: boolean;
}

class CertificateService {
  private baseUrl = '/api';

  async createTemplate(template: Omit<CertificateTemplate, 'id'>): Promise<CertificateTemplate> {
    const response = await fetch(`${this.baseUrl}/certificate-templates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(template)
    });
    return response.json();
  }

  async issueCertificate(data: {
    userId: string;
    courseId: string;
    templateId: string;
  }): Promise<Certificate> {
    const certificateNumber = `CERT-${Date.now()}`;
    const verificationCode = Math.random().toString(36).substring(2, 15);
    
    const certificate: Certificate = {
      id: Date.now().toString(),
      ...data,
      certificateNumber,
      verificationCode,
      issuedAt: new Date().toISOString(),
      status: 'active'
    };

    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => resolve(certificate), 500);
    });
  }

  async revokeCertificate(certificateId: string): Promise<void> {
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => resolve(), 300);
    });
  }

  async verifyCertificate(certificateNumber: string): Promise<{
    valid: boolean;
    certificate?: Certificate;
    error?: string;
  }> {
    // Simulate verification
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          valid: true,
          certificate: {
            id: '1',
            userId: 'user1',
            courseId: 'course1',
            templateId: 'template1',
            certificateNumber,
            verificationCode: 'abc123',
            issuedAt: new Date().toISOString(),
            status: 'active'
          }
        });
      }, 800);
    });
  }

  async generateQRCode(certificateId: string): Promise<string> {
    // Simulate QR code generation
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`);
      }, 500);
    });
  }

  async anchorToBlockchain(certificateId: string): Promise<string> {
    // Simulate blockchain anchoring
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`0x${Math.random().toString(16).substring(2, 66)}`);
      }, 2000);
    });
  }
}

export const certificateService = new CertificateService();