import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { useSubmitPreOrder } from '../hooks/useQueries';

type MangoVariant = 'Desi Mango' | 'Kesar Mango';
type PackagingSize = '5 kg box' | '10 kg box';

// Pricing per variant + packaging combination
const VARIANT_BOX_PRICES: Record<MangoVariant, Record<PackagingSize, number>> = {
  'Desi Mango': {
    '5 kg box': 200,
    '10 kg box': 350
  },
  'Kesar Mango': {
    '5 kg box': 600,
    '10 kg box': 1000
  }
};

// Original (crossed-out) prices — only for Kesar Mango 5 kg box
const VARIANT_BOX_ORIGINAL_PRICES: Record<MangoVariant, Record<PackagingSize, number | null>> = {
  'Desi Mango': {
    '5 kg box': null,
    '10 kg box': null
  },
  'Kesar Mango': {
    '5 kg box': 650,
    '10 kg box': null
  }
};

const BOX_WEIGHTS: Record<PackagingSize, number> = {
  '5 kg box': 5,
  '10 kg box': 10
};

interface FormState {
  mangoVariant: MangoVariant;
  packagingSize: PackagingSize;
  quantity: number;
  customerName: string;
  phone: string;
}

const PreOrderForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    mangoVariant: 'Kesar Mango',
    packagingSize: '5 kg box',
    quantity: 1,
    customerName: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const submitPreOrder = useSubmitPreOrder();

  const boxWeight = BOX_WEIGHTS[form.packagingSize];
  const totalKg = form.quantity * boxWeight;
  const pricePerBox = VARIANT_BOX_PRICES[form.mangoVariant][form.packagingSize];
  const originalPricePerBox = VARIANT_BOX_ORIGINAL_PRICES[form.mangoVariant][form.packagingSize];
  const totalPrice = form.quantity * pricePerBox;
  const totalOriginalPrice = originalPricePerBox ? form.quantity * originalPricePerBox : null;
  const totalSavings = totalOriginalPrice ? totalOriginalPrice - totalPrice : 0;

  const handleChange = (field: keyof FormState, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === 'phone') setPhoneError('');
  };

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  const buildWhatsAppUrl = (f: FormState, price: number, kg: number, savings: number) => {
    const savingsNote = savings > 0 ? `\n• Pre-Order Savings: ₹${savings} 🎉` : '';
    const message = encodeURIComponent(
      `Hello N.B. Farm! 🥭\n\nI would like to pre-order mangoes:\n\n` +
        `• Variant: ${f.mangoVariant}\n` +
        `• Packaging: ${f.packagingSize}\n` +
        `• Quantity: ${f.quantity} box(es) (${kg} kg)\n` +
        `• Price per box: ₹${price}${savingsNote}\n` +
        `• Total Price: ₹${f.quantity * price}\n\n` +
        `Name: ${f.customerName}\n` +
        `Phone: ${f.phone}\n\n` +
        `Please confirm my pre-order. Thank you!`
    );
    return `https://wa.me/919978510084?text=${message}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.customerName.trim()) return;

    if (!validatePhone(form.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }

    // Build WhatsApp URL synchronously BEFORE any async call
    // (browsers block window.open after async operations)
    const whatsappUrl = buildWhatsAppUrl(form, pricePerBox, totalKg, totalSavings);

    // Open WhatsApp immediately (synchronous, before await)
    window.open(whatsappUrl, '_blank');

    // Then submit to backend (non-blocking for UX)
    try {
      await submitPreOrder.mutateAsync({
        customerName: form.customerName,
        phone: form.phone,
        mangoVariant: form.mangoVariant,
        packagingSize: form.packagingSize,
        quantity: form.quantity,
        unitPrice: pricePerBox
      });
    } catch (err) {
      // Backend submission failed but WhatsApp was already opened — order still goes through
      console.error('Pre-order backend submission failed:', err);
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="preorder" className="py-20 bg-offwhite-warm jute-texture">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-offwhite-cream painted-border rounded-2xl p-10 shadow-farm-lg">
            <CheckCircle2 className="w-16 h-16 text-leaf mx-auto mb-4" />
            <h3 className="font-serif text-3xl font-bold text-mud mb-3">Pre-Order Placed! 🎉</h3>
            <p className="font-body text-muted-foreground mb-2">
              Your WhatsApp has been opened with your order details.
            </p>
            <p className="font-body text-muted-foreground mb-6">
              We'll confirm your order shortly. Thank you for choosing N.B. Farm!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-turmeric px-6 py-3 rounded-full font-body font-bold"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="preorder" className="py-20 bg-offwhite-warm jute-texture">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-handwritten text-terracotta text-xl">Limited Season</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            Pre-Order Mangoes
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Secure your box of Kutch's finest mangoes before the season runs out!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-offwhite-cream painted-border rounded-2xl p-6 sm:p-8 shadow-farm-lg"
        >
          {/* Mango Variant */}
          <div className="mb-5">
            <label className="block font-body font-semibold text-mud mb-2">
              Mango Variant <span className="text-terracotta">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['Desi Mango', 'Kesar Mango'] as MangoVariant[]).map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => handleChange('mangoVariant', variant)}
                  className={`py-3 px-4 rounded-xl border-2 font-body font-semibold text-sm transition-all ${
                    form.mangoVariant === variant
                      ? 'border-turmeric bg-turmeric/20 text-mud shadow-xs'
                      : 'border-border bg-offwhite-cream text-muted-foreground hover:border-turmeric/50'
                  }`}
                >
                  🥭 {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Packaging Size */}
          <div className="mb-5">
            <label className="block font-body font-semibold text-mud mb-2">
              Packaging Size <span className="text-terracotta">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* 5 kg box */}
              <button
                type="button"
                onClick={() => handleChange('packagingSize', '5 kg box')}
                className={`py-3 px-4 rounded-xl border-2 font-body font-semibold text-sm transition-all relative ${
                  form.packagingSize === '5 kg box'
                    ? 'border-leaf bg-leaf/10 text-leaf shadow-xs'
                    : 'border-border bg-offwhite-cream text-muted-foreground hover:border-leaf/50'
                }`}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span>📦 5 kg box</span>
                  {form.mangoVariant === 'Kesar Mango' ? (
                    <span className="flex items-center gap-1.5">
                      <span className="line-through text-xs text-muted-foreground font-normal">₹650</span>
                      <span className="text-terracotta font-bold">₹600</span>
                    </span>
                  ) : (
                    <span className="text-terracotta font-bold">₹200</span>
                  )}
                </div>
              </button>

              {/* 10 kg box */}
              <button
                type="button"
                onClick={() => handleChange('packagingSize', '10 kg box')}
                className={`py-3 px-4 rounded-xl border-2 font-body font-semibold text-sm transition-all ${
                  form.packagingSize === '10 kg box'
                    ? 'border-leaf bg-leaf/10 text-leaf shadow-xs'
                    : 'border-border bg-offwhite-cream text-muted-foreground hover:border-leaf/50'
                }`}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span>📦 10 kg box</span>
                  <span className="text-mud font-bold">
                    ₹{VARIANT_BOX_PRICES[form.mangoVariant]['10 kg box']}
                  </span>
                </div>
              </button>
            </div>

            {/* Savings callout — only for Kesar Mango 5 kg box */}
            {form.packagingSize === '5 kg box' && form.mangoVariant === 'Kesar Mango' && (
              <div className="mt-2 flex items-center gap-1.5 bg-leaf/10 border border-leaf/30 rounded-lg px-3 py-2">
                <svg className="w-3.5 h-3.5 text-leaf flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                <p className="font-body text-xs text-leaf font-semibold">
                  🎉 Pre-order discount! You save ₹50 per box!
                </p>
              </div>
            )}
          </div>

          {/* Quantity */}
          <div className="mb-5">
            <label htmlFor="quantity" className="block font-body font-semibold text-mud mb-2">
              Number of Boxes <span className="text-terracotta">*</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleChange('quantity', Math.max(1, form.quantity - 1))}
                className="w-10 h-10 rounded-full border-2 border-border bg-offwhite-cream text-mud font-bold text-lg hover:border-turmeric transition-colors flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <input
                id="quantity"
                type="number"
                min={1}
                value={form.quantity}
                onChange={(e) => handleChange('quantity', Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center py-2 px-3 border-2 border-border rounded-xl font-body font-bold text-mud bg-offwhite-cream focus:outline-none focus:border-turmeric"
              />
              <button
                type="button"
                onClick={() => handleChange('quantity', form.quantity + 1)}
                className="w-10 h-10 rounded-full border-2 border-border bg-offwhite-cream text-mud font-bold text-lg hover:border-turmeric transition-colors flex items-center justify-center"
                aria-label="Increase quantity"
              >
                +
              </button>
              <span className="font-body text-sm text-muted-foreground">
                = {totalKg} kg total
              </span>
            </div>
          </div>

          {/* Price display */}
          <div className="mb-5 bg-turmeric/10 border border-turmeric/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">
                  {form.quantity} box × ₹{pricePerBox}/box
                  {originalPricePerBox && (
                    <span className="ml-1 line-through text-xs">₹{originalPricePerBox}</span>
                  )}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {form.mangoVariant} · {form.packagingSize} · {totalKg} kg
                </p>
              </div>
              <div className="text-right">
                <p className="font-body text-xs text-muted-foreground">Total Price</p>
                <p className="font-serif text-3xl font-bold text-terracotta">₹{totalPrice}</p>
                {totalSavings > 0 && (
                  <p className="font-body text-xs text-leaf font-semibold mt-0.5">
                    You save ₹{totalSavings}!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div className="mb-5">
            <label htmlFor="customerName" className="block font-body font-semibold text-mud mb-2">
              Your Name <span className="text-terracotta">*</span>
            </label>
            <input
              id="customerName"
              type="text"
              required
              value={form.customerName}
              onChange={(e) => handleChange('customerName', e.target.value)}
              placeholder="Enter your full name"
              className="w-full py-3 px-4 border-2 border-border rounded-xl font-body text-foreground bg-offwhite-cream focus:outline-none focus:border-turmeric placeholder:text-muted-foreground"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block font-body font-semibold text-mud mb-2">
              Phone / WhatsApp <span className="text-terracotta">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="10-digit mobile number"
              className={`w-full py-3 px-4 border-2 rounded-xl font-body text-foreground bg-offwhite-cream focus:outline-none placeholder:text-muted-foreground ${
                phoneError ? 'border-terracotta' : 'border-border focus:border-turmeric'
              }`}
            />
            {phoneError && (
              <p className="mt-1 text-xs text-terracotta font-body">{phoneError}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitPreOrder.isPending}
            className="w-full py-4 px-6 rounded-full btn-terracotta font-body font-bold text-lg shadow-farm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitPreOrder.isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Placing Order...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pre-Order via WhatsApp
              </>
            )}
          </button>

          {submitPreOrder.isError && (
            <p className="mt-3 text-center text-sm text-terracotta font-body">
              Something went wrong. Please try again or contact us directly on WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default PreOrderForm;
