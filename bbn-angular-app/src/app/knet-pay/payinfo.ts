export interface Payinfo {
    bbynPaymentId: number;
    bbynTrackId: string;
    cif: string;
    custId: number;
    amountInKwd: number;
    fromAccount: string;
    toAccount: string;
    stage: number;
    status: number;
    bbynRefId: string;
    transferTypeId: number;
    isSmsSent: number;
    comment: string;
    tokenReq: string;
  }