import {MiningCalculatorResponse} from '../../interfaces/global';

const API_LINK = 'http://127.0.0.1:8000';

export const resolve_url = async (link: string) => {
  return new URL(link, API_LINK).href;
};

interface MiningCalculatorInput {
  hash_rate: number;
  power_consumption: number;
  electricity_cost: number;
  initial_investment: number;
}

export class Api {
  private static instance: Api;

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  /**
   * Calculates mining profitability based on input parameters
   * @param {MiningCalculatorInput} input - The mining calculation parameters
   * @param {number} input.hash_rate - Hash rate in TH/s
   * @param {number} input.power_consumption - Power consumption in Watts
   * @param {number} input.electricity_cost - Electricity cost in $/kWh
   * @param {number} input.initial_investment - Initial investment amount in USD
   * @returns {Promise<MiningCalculatorResponse>} Mining profitability calculation results
   * @throws {Error} When input validation fails or API request fails
   */
  static async calculateMining(
    input: MiningCalculatorInput,
  ): Promise<MiningCalculatorResponse> {
    try {
      // Send request to API
      const url = await resolve_url('/calculate');

      console.warn(url);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || 'Failed to calculate mining profitability',
        );
      }

      return await response.json();
    } catch (error) {
      console.error('Mining calculation error:', error);
      throw error;
    }
  }
}
