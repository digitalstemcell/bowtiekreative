import { Container } from '../../../shared/components/Container';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

export function WhatAreFunnels() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Is a Funnel (And Why You Need One)
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A funnel is a strategic system that guides your visitors through a predictable journey—from discovering your offer to becoming paying customers.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <XCircle className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Without a Funnel</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">•</span>
                    <span className="text-slate-700">Visitors land, look around, and leave without taking action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">•</span>
                    <span className="text-slate-700">No clear path from interest to purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">•</span>
                    <span className="text-slate-700">You spend hours manually following up with leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">•</span>
                    <span className="text-slate-700">Inconsistent messaging across touchpoints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">•</span>
                    <span className="text-slate-700">Marketing feels like throwing money into the void</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">With a Funnel</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span className="text-slate-700">Visitors follow a clear path from awareness to purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span className="text-slate-700">Automated email sequences nurture leads while you sleep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span className="text-slate-700">Strategic touchpoints guide prospects to say "yes"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span className="text-slate-700">Data-driven optimization improves results over time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span className="text-slate-700">Your marketing becomes a revenue-generating asset</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              The Bottom Line
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              A website is a static destination. A funnel is an active sales system. While a website waits for visitors to figure out what to do next, a funnel strategically guides them through each step—capturing leads, building trust, and converting them into customers automatically.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
