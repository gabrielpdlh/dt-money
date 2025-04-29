import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <div>
      <SummaryContainer>
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00B37E" />
          </header>

          <strong>R$17.400,00</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#F75A68" />
          </header>

          <strong>R$17.400,00</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#FFFF" />
          </header>

          <strong>R$17.400,00</strong>
        </SummaryCard>
      </SummaryContainer>
    </div>
  );
}
