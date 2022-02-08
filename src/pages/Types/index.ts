export interface IMetrics {
    totalGeral: number;
    totalUploadFalse: number
    totalUploadTrue: number
    baixadoBennerSucesso: number
    erroUploadTrue: number
    baixadoBennerFail: number
    horasTrabalho: number
}

export interface IIncidentesMetrics {
    totalConcluidoFalse: number;
    totalConcluidoTrue: number
    totalErroCadastroTrue: number
    totalJaPossuiCadastroFalse: number
    totalEncontrouDuplicidadeTrue: number
    horasTrabalho: number
}