import { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'

const initialItems = [
  { id: 'p1', name: 'Rice 5kg', shop: 'More Supermarket', price: 350, qty: 1 },
  { id: 'p2', name: 'Sugar 1kg', shop: 'More Supermarket', price: 48, qty: 2 },
  { id: 'p3', name: 'Milk 1L', shop: 'More Supermarket', price: 30, qty: 1 },
]

export default function CustomerCart() {
  const [items, setItems] = useState(initialItems)

  const updateQty = (id, delta) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)))
  }
  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const deliveryFee = items.length ? 20 : 0
  const total = subtotal + deliveryFee

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">My Cart</h2>
        <p className="mt-1 text-sm text-ink-500">{items.length} items from More Supermarket</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card divide-y divide-ink-100 lg:col-span-2">
          {items.length === 0 && <p className="p-6 text-center text-sm text-ink-500">Your cart is empty.</p>}
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="text-sm font-semibold text-navy-900">{item.name}</p>
                <p className="text-xs text-ink-500">{item.shop}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-ink-100 px-2 py-1">
                  <button onClick={() => updateQty(item.id, -1)} className="text-ink-500 hover:text-navy-800">
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="text-ink-500 hover:text-navy-800">
                    <Plus size={14} />
                  </button>
                </div>
                <p className="w-16 text-right text-sm font-semibold text-navy-900">₹{item.price * item.qty}</p>
                <button onClick={() => removeItem(item.id)} className="text-ink-300 hover:text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="card h-fit p-5">
          <h3 className="text-sm font-semibold text-navy-900">Order Summary</h3>
          <div className="mt-4 space-y-2.5 text-sm text-ink-500">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-ink-900">₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="text-ink-900">₹{deliveryFee}</span>
            </div>
          </div>
          <div className="my-4 border-t border-ink-100" />
          <div className="flex justify-between text-base font-bold text-navy-900">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="btn-primary mt-5 w-full" disabled={items.length === 0}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
