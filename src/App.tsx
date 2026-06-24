// @ts-nocheck
import React, { useState, useEffect } from 'react';

// --- PIXEL-PERFECT UNIHOUSE BRAND LOGO COMPONENT ---
// Colors: Yellow background circle, Solid Black center, White lines/fork/spoon, Yellow cursive branding
const UnihausVectorLogo = ({ className = "h-16 w-16" }) => (
  <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 1. Yellow Background Circle */}
    <circle cx="250" cy="250" r="230" fill="#FFEB00" stroke="#000000" strokeWidth="8" />
    
    {/* 2. Solid Black Circle in the center behind the word */}
    <circle cx="250" cy="250" r="160" fill="#000000" />
    
    {/* 3. White Fork and Spoon Tracking Lines / Curves */}
    <path d="M 125 250 A 125 125 0 0 1 375 250" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
    <path d="M 375 250 A 125 125 0 0 1 125 250" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeDasharray="16 12" />
    
    {/* White Spoon Head */}
    <g transform="translate(375, 250) rotate(90)">
      <path d="M-12,-25 C-12,-42 12,-42 12,-25 C12,-8 4,0 4,16 L-4,16 C-4,0 -12,-8 -12,-25 Z" fill="#FFFFFF" />
    </g>
    
    {/* White Fork Prongs */}
    <g transform="translate(125, 250) rotate(-90)">
      <path d="M-10,-15 L10,-15 L10,-7 L6,-7 L6,-28 L3,-28 L3,-7 L-3,-7 L-3,-28 L-6,-28 L-6,-7 L-10,-7 Z" fill="#FFFFFF" />
      <rect x="-2.5" y="-7" width="5" height="28" rx="1.5" fill="#FFFFFF" />
    </g>

    {/* White ring lines around black center */}
    <circle cx="250" cy="250" r="145" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />

    {/* 4. Yellow Cursive Brand Wording - UniHaus */}
    <text x="250" y="278" 
      fontFamily="'Brush Script MT', 'Pacifico', 'Playball', cursive, sans-serif" 
      fontSize="84" 
      fontWeight="900"
      fill="#FFEB00" 
      stroke="#000000"
      strokeWidth="4"
      textAnchor="middle" 
      transform="rotate(-5, 250, 260)">
      UniHaus
    </text>

    {/* Black & White Subtitle Block */}
    <g transform="translate(250, 325)">
      <rect x="-80" y="-16" width="160" height="32" rx="4" fill="#000000" stroke="#FFFFFF" strokeWidth="2" />
      <text x="0" y="5" 
        fontFamily="'Impact', 'Arial Black', sans-serif" 
        fontSize="12" 
        fill="#FFFFFF" 
        letterSpacing="2"
        textAnchor="middle">
        WESTERN & CAFE
      </text>
    </g>
  </svg>
);

const MENU_FOOD = [
  // Chicken (6 items)
  { id: "f1", name: "Sarawak Blackpepper Chicken Chop", price: 16.50, category: "Chicken", emoji: "🍗", isAvailable: true, ingredients: ["Chicken Breast", "French Fries", "Blackpepper Sauce"] },
  { id: "f2", name: "Golden Salted Egg Chicken Chop", price: 17.50, category: "Chicken", emoji: "🍳", isAvailable: true, ingredients: ["Chicken Breast", "French Fries", "Salted Egg Glaze"] },
  { id: "f3", name: "Spicy Buffalo Wings (6pcs)", price: 11.90, category: "Chicken", emoji: "🔥", isAvailable: true, ingredients: ["Chicken Wings", "Buffalo Glaze"] },
  { id: "f4", name: "Crispy Popcorn Chicken Basket", price: 8.90, category: "Chicken", emoji: "🍿", isAvailable: true, ingredients: ["Chicken Breast", "Cheese Powder"] },
  { id: "f5", name: "Buttermilk Crispy Chicken Rice", price: 14.50, category: "Chicken", emoji: "🍛", isAvailable: true, ingredients: ["Chicken Breast", "White Rice", "Buttermilk Sauce"] },
  { id: "f6", name: "Grilled Herb Chicken Breast", price: 15.90, category: "Chicken", emoji: "🌿", isAvailable: true, ingredients: ["Chicken Breast", "Mashed Potatoes", "Herb Glaze"] },

  // Burgers (4 items)
  { id: "f7", name: "Samarahan Monster Burger", price: 18.90, category: "Burgers", emoji: "🍔", isAvailable: true, ingredients: ["Beef Patty", "Burger Buns", "Mozzarella Cheese"] },
  { id: "f8", name: "Mushroom Swiss Beef Burger", price: 16.90, category: "Burgers", emoji: "🍄", isAvailable: true, ingredients: ["Beef Patty", "Burger Buns", "Mushroom Soup Mix"] },
  { id: "f9", name: "Crispy Golden Chicken Burger", price: 13.90, category: "Burgers", emoji: "🥪", isAvailable: true, ingredients: ["Chicken Breast", "Burger Buns", "Mozzarella Cheese"] },
  { id: "f10", name: "Double Cheese Smash Burger", price: 19.90, category: "Burgers", emoji: "🧀", isAvailable: true, ingredients: ["Beef Patty", "Burger Buns", "Mozzarella Cheese"] },

  // Steaks & Grills (3 items)
  { id: "f11", name: "Sizzling Blackpepper Ribeye", price: 34.00, category: "Steaks", emoji: "🥩", isAvailable: true, ingredients: ["Premium Beef Ribeye", "Blackpepper Sauce"] },
  { id: "f12", name: "Char-Grilled Lamb Chop Trio", price: 28.00, category: "Steaks", emoji: "🍖", isAvailable: true, ingredients: ["Premium Lamb Chops", "Mashed Potatoes", "Mint Glaze"] },
  { id: "f13", name: "Sizzling Garlic Butter Salmon", price: 32.00, category: "Steaks", emoji: "🐟", isAvailable: true, ingredients: ["Salmon Fillet", "Garlic Butter"] },

  // Pasta (4 items)
  { id: "f14", name: "Cheesy Carbonara Symphony", price: 14.90, category: "Pasta", emoji: "🍝", isAvailable: true, ingredients: ["Pasta Noodles", "Mozzarella Cheese", "Buttermilk Sauce"] },
  { id: "f15", name: "Spicy Aglio Olio Chicken", price: 13.90, category: "Pasta", emoji: "🌶️", isAvailable: true, ingredients: ["Pasta Noodles", "Chicken Breast"] },
  { id: "f16", name: "Classic Beef Bolognese Pasta", price: 14.90, category: "Pasta", emoji: "🍅", isAvailable: true, ingredients: ["Pasta Noodles", "Beef Patty"] },
  { id: "f17", name: "Mac and Cheese Golden Bake", price: 15.90, category: "Pasta", emoji: "🧀", isAvailable: true, ingredients: ["Pasta Noodles", "Mozzarella Cheese"] },

  // Dulang Platters (2 items)
  { id: "f18", name: "Dulang Western Sharing Platter", price: 55.00, category: "Platters", emoji: "🍱", isAvailable: true, ingredients: ["Chicken Breast", "French Fries", "Blackpepper Sauce"] },
  { id: "f19", name: "Ultimate Dulang Family Platter", price: 89.00, category: "Platters", emoji: "🥘", isAvailable: true, ingredients: ["Chicken Breast", "Premium Lamb Chops", "French Fries", "Blackpepper Sauce"] },

  // Sides (1 item)
  { id: "f20", name: "Cheesy Bacon Loaded Fries", price: 9.90, category: "Sides", emoji: "🍟", isAvailable: true, ingredients: ["French Fries", "Mozzarella Cheese"] }
];

const MENU_DRINKS = [
  // Local Sarawak Specialties (3 items)
  { id: "d1", name: "Iced Sarawak Teh C Peng", price: 4.50, category: "Drinks", emoji: "🍹", isAvailable: true, ingredients: ["Gula Apong Syrup", "Evaporated Milk"] },
  { id: "d2", name: "Gula Apong Pearl Milk Tea", price: 5.50, category: "Drinks", emoji: "🧋", isAvailable: true, ingredients: ["Gula Apong Syrup"] },
  { id: "d3", name: "Iced Special Gula Apong Milo", price: 5.00, category: "Drinks", emoji: "🥤", isAvailable: true, ingredients: ["Gula Apong Syrup"] },

  // Fresh Juices (3 items)
  { id: "d4", name: "Fresh Watermelon Juice", price: 6.00, category: "Drinks", emoji: "🍉", isAvailable: true, ingredients: [] },
  { id: "d5", name: "Squeezed Orange Juice", price: 6.00, category: "Drinks", emoji: "🍊", isAvailable: true, ingredients: [] },
  { id: "d6", name: "Signature Mint Lemonade", price: 5.50, category: "Drinks", emoji: "🍋", isAvailable: true, ingredients: [] },

  // Coffees (4 items)
  { id: "d7", name: "Iced Espresso Americano", price: 5.00, category: "Drinks", emoji: "☕", isAvailable: true, ingredients: [] },
  { id: "d8", name: "Creamy Cafe Latte", price: 6.50, category: "Drinks", emoji: "🥛", isAvailable: true, ingredients: [] },
  { id: "d9", name: "Rich Cappuccino Roast", price: 6.50, category: "Drinks", emoji: "🤎", isAvailable: true, ingredients: [] },
  { id: "d10", name: "Iced Caramel Macchiato", price: 8.50, category: "Drinks", emoji: "🍯", isAvailable: true, ingredients: [] },

  // Specialty Shakes & Sodas (5 items)
  { id: "d11", name: "Sarawak Blue Lagoon Mocktail", price: 7.50, category: "Drinks", emoji: "🌊", isAvailable: true, ingredients: [] },
  { id: "d12", name: "Fizzy Peach Mint Soda", price: 7.00, category: "Drinks", emoji: "🍑", isAvailable: true, ingredients: [] },
  { id: "d13", name: "Indulgent Vanilla Oreo Shake", price: 9.50, category: "Drinks", emoji: "🍪", isAvailable: true, ingredients: [] },
  { id: "d14", name: "Velvety Strawberry Milkshake", price: 8.90, category: "Drinks", emoji: "🍓", isAvailable: true, ingredients: [] },
  { id: "d15", name: "Rich Double Cocoa Shake", price: 7.50, category: "Drinks", emoji: "🍫", isAvailable: true, ingredients: [] }
];

const INITIAL_INVENTORY = [
  { id: "i1", name: "Chicken Breast", stock: 45, unit: "pieces", warningLimit: 10 },
  { id: "i2", name: "Beef Patty", stock: 32, unit: "pieces", warningLimit: 8 },
  { id: "i3", name: "Premium Beef Ribeye", stock: 15, unit: "pieces", warningLimit: 4 },
  { id: "i4", name: "Premium Lamb Chops", stock: 20, unit: "pieces", warningLimit: 5 },
  { id: "i5", name: "Salmon Fillet", stock: 12, unit: "pieces", warningLimit: 3 },
  { id: "i6", name: "French Fries", stock: 25.0, unit: "kg", warningLimit: 5.0 },
  { id: "i7", name: "Blackpepper Sauce", stock: 15.0, unit: "Liters", warningLimit: 3.0 },
  { id: "i8", name: "Pasta Noodles", stock: 12.0, unit: "kg", warningLimit: 2.0 },
  { id: "i9", name: "Burger Buns", stock: 18, unit: "pieces", warningLimit: 12 }, 
  { id: "i10", name: "Mozzarella Cheese", stock: 18.5, unit: "kg", warningLimit: 4.0 },
  { id: "i11", name: "Gula Apong Syrup", stock: 8.0, unit: "Liters", warningLimit: 1.5 }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('menu'); // menu (Counter), kitchen (KDS), inventory (Stock Hub)
  const [menuItems, setMenuItems] = useState([...MENU_FOOD, ...MENU_DRINKS]);
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [cart, setCart] = useState([]);
  
  // Checkout & dining arrangements
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [tableNumber, setTableNumber] = useState('Table 1');
  const [isTakeaway, setIsTakeaway] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Sarawak Pay / S-Pay'); 
  const [cashReceived, setCashReceived] = useState('');

  // Kitchen Queue Ticket state (Dynamic simulated time track added)
  const [kdsOrders, setKdsOrders] = useState([
    {
      id: "101",
      table: "Table 3",
      isTakeaway: false,
      minutesElapsed: 8,
      paymentMethod: "Sarawak Pay / S-Pay",
      items: [
        { name: "Sarawak Blackpepper Chicken Chop", qty: 1, note: "Double blackpepper sauce please!" },
        { name: "Iced Sarawak Teh C Peng", qty: 1, note: "" }
      ],
      status: "Cooking"
    },
    {
      id: "102",
      table: "Takeaway",
      isTakeaway: true,
      minutesElapsed: 11, // Over 10 mins (triggers high-visibility visual blinking rule)
      paymentMethod: "GrabFood API",
      items: [
        { name: "Samarahan Monster Burger", qty: 2, note: "No onions, slice into halves" }
      ],
      status: "Pending"
    }
  ]);

  const [offlineSync, setOfflineSync] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const timer = setInterval(() => {
      setKdsOrders(prevOrders => 
        prevOrders.map(order => ({
          ...order,
          minutesElapsed: order.minutesElapsed + 1
        }))
      );
    }, 60000); // increment wait time counter every 1 minute
    return () => clearInterval(timer);
  }, []);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 4000);
  };

  const addToCart = (item) => {
    if (!item.isAvailable) {
      showNotification(`❌ Sorry, ${item.name} is currently locked out (Sold Out).`);
      return;
    }
    
    setCart(prevCart => {
      const existing = prevCart.find(c => c.id === item.id);
      if (existing) {
        return prevCart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prevCart, { ...item, qty: 1, note: "" }];
    });
    showNotification(`👍 Added ${item.name} to the active tray!`);
  };

  const updateCartQty = (id, amount) => {
    setCart(prevCart => {
      return prevCart.map(c => {
        if (c.id === id) {
          const nextQty = c.qty + amount;
          return nextQty > 0 ? { ...c, qty: nextQty } : null;
        }
        return c;
      }).filter(Boolean);
    });
  };

  const updateItemNote = (id, noteText) => {
    setCart(prevCart => prevCart.map(c => c.id === id ? { ...c, note: noteText } : c));
  };

  const handleDiningToggle = (takeawayVal) => {
    setIsTakeaway(takeawayVal);
    // If user shifts to Dine-In, clear delivery-only methods
    if (!takeawayVal && (paymentMethod === 'GrabFood API' || paymentMethod === 'Foodpanda API')) {
      setPaymentMethod('Sarawak Pay / S-Pay');
    }
  };

  const openCheckoutProcess = () => {
    if (cart.length === 0) {
      showNotification("⚠️ Your ordering tray is empty!");
      return;
    }
    setShowCheckoutModal(true);
  };

  const handlePaymentAndCheckout = () => {
    const totalBill = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    if (paymentMethod === 'Cash' && parseFloat(cashReceived || 0) < totalBill) {
      showNotification(`⚠️ Insufficient Cash received! Need RM ${totalBill.toFixed(2)}`);
      return;
    }

    const newOrder = {
      id: Math.floor(100 + Math.random() * 900).toString(),
      table: isTakeaway ? "Takeaway" : tableNumber,
      isTakeaway: isTakeaway,
      minutesElapsed: 0,
      paymentMethod: paymentMethod,
      items: cart.map(item => ({
        name: item.name,
        qty: item.qty,
        note: item.note
      })),
      status: "Pending"
    };

    setKdsOrders(prev => [...prev, newOrder]);
    setCart([]);
    setShowCheckoutModal(false);
    setCashReceived('');
    showNotification(`🎉 Payment via ${paymentMethod} Approved! Ticket dispatched to UniKDS Monitor.`);
    setActiveTab('kitchen'); 
  };

  const finishKitchenOrder = (orderId) => {
    const orderToComplete = kdsOrders.find(o => o.id === orderId);
    if (!orderToComplete) return;

    // Deduct raw items inside UniSync Automatic Stock Hub
    setInventory(prevInventory => {
      return prevInventory.map(invItem => {
        let itemsUsed = 0;
        
        orderToComplete.items.forEach(orderItem => {
          const menuMatch = menuItems.find(m => m.name === orderItem.name);
          if (menuMatch) {
            const usesIngredient = menuMatch.ingredients.includes(invItem.name);
            if (usesIngredient) {
              itemsUsed += orderItem.qty;
            }
          }
        });

        if (itemsUsed > 0) {
          const finalStock = Math.max(0, invItem.stock - itemsUsed);
          if (finalStock <= invItem.warningLimit) {
            showNotification(`⚠️ Low stock warning on Stock Hub: ${invItem.name}! Please restock.`);
          }
          return { ...invItem, stock: finalStock };
        }
        return invItem;
      });
    });

    setKdsOrders(prev => prev.filter(o => o.id !== orderId));
    showNotification(`✅ Completed Order #${orderId}! Raw inventory updated inside Automatic Stock Hub.`);
  };

  const toggleAvailable = (menuId) => {
    setMenuItems(prevMenu => prevMenu.map(m => {
      if (m.id === menuId) {
        const updatedState = !m.isAvailable;
        showNotification(`${m.name} is now ${updatedState ? "Available" : "Sold Out"}`);
        return { ...m, isAvailable: updatedState };
      }
      return m;
    }));
  };

  const quickRefillStock = (ingId, amount) => {
    setInventory(prev => prev.map(inv => {
      if (inv.id === ingId) {
        showNotification(`✏️ Restocked +${amount} to ${inv.name}`);
        return { ...inv, stock: inv.stock + amount };
      }
      return inv;
    }));
  };

  const categories = ["All", "Chicken", "Burgers", "Steaks", "Pasta", "Platters", "Sides", "Drinks"];
  const filteredMenu = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="min-h-screen bg-[#0C0D0A] text-[#EBECE8] font-sans flex flex-col">
      
      {/* --- FLOATING NOTIFICATION BANNER --- */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#FFEB00] text-black px-6 py-4 rounded-xl shadow-2xl font-black flex items-center gap-3 animate-bounce border-2 border-black">
          <span className="text-xl">⚡</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* --- SITE HEADER with custom circular framed vector logo --- */}
      <header className="bg-[#121310] border-b border-[#2A2B25] py-4 px-6 sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Pristine high-fidelity dynamic custom SVG logo showing correct colors */}
            <div className="w-16 h-16 rounded-full shrink-0 shadow-[0_0_15px_rgba(255,235,0,0.35)] hover:scale-105 transition-all duration-300">
              <UnihausVectorLogo className="w-full h-full" />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-[#FFEB00] text-black font-extrabold px-2 py-0.5 rounded">SARAWAK</span>
                <span className="text-xs text-[#22C55E] font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span> Terminal Connected
                </span>
              </div>
              <h1 className="text-3xl font-black text-white tracking-wider">UniHaus</h1>
            </div>
          </div>

          {/* Navigation Controls - Simple clear tabs using our defined branding terms */}
          <div className="flex bg-[#0C0D0A] p-1.5 rounded-xl border border-[#2A2B25] gap-1 overflow-x-auto w-full md:w-auto">
            <button 
              onClick={() => setActiveTab('menu')}
              className={`flex-1 md:flex-initial px-5 py-3 rounded-lg text-xs font-black tracking-wider transition-all uppercase flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === 'menu' 
                  ? 'bg-[#FFEB00] text-black' 
                  : 'text-gray-400 hover:text-white hover:bg-[#1A1B17]'
              }`}
            >
              🍽️ Counter Register (POS)
            </button>
            <button 
              onClick={() => setActiveTab('kitchen')}
              className={`flex-1 md:flex-initial px-5 py-3 rounded-lg text-xs font-black tracking-wider transition-all uppercase flex items-center justify-center gap-2 relative whitespace-nowrap ${
                activeTab === 'kitchen' 
                  ? 'bg-[#FFEB00] text-black' 
                  : 'text-gray-400 hover:text-white hover:bg-[#1A1B17]'
              }`}
            >
              👨‍🍳 cooks KDS Monitor
              {kdsOrders.length > 0 && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {kdsOrders.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setActiveTab('inventory')}
              className={`flex-1 md:flex-initial px-5 py-3 rounded-lg text-xs font-black tracking-wider transition-all uppercase flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === 'inventory' 
                  ? 'bg-[#FFEB00] text-black' 
                  : 'text-gray-400 hover:text-white hover:bg-[#1A1B17]'
              }`}
            >
              📦 Stock Hub Ledger
            </button>
          </div>

        </div>
      </header>

      {/* --- MAIN PAGE CONTENT LAYOUT --- */}
      <main className="max-w-7xl mx-auto p-4 flex-1 w-full">
        
        {/* ==================== MODULE 1: CASHIER FRONT-COUNTER VIEW ==================== */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left side: Live Stock Counter Terminal (Menu Item Pad) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Concept Title Banner */}
              <div className="bg-[#121310] border border-[#2A2B25] p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="text-[10px] bg-[#FFEB00]/20 text-[#FFEB00] border border-[#FFEB00]/20 font-bold px-2 py-0.5 rounded uppercase">Concept Component</span>
                  <h2 className="text-lg font-black text-white mt-1">Live Stock Counter Terminal</h2>
                </div>
                <p className="text-xs text-gray-400 max-w-xs sm:text-right">A counter register interface flashing automatic item status indicators to handle manual ordering customers smoothly.</p>
              </div>

              {/* Category Filter row */}
              <div className="flex gap-2 overflow-x-auto pb-2 border-b border-[#1C1D18]">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                      selectedCategory === cat 
                        ? 'bg-[#FFEB00] text-black border-[#FFEB00]' 
                        : 'bg-[#121310] text-gray-400 border-[#2A2B25] hover:text-white'
                    }`}
                  >
                    {cat === "All" ? "⭐ All Items" : cat}
                  </button>
                ))}
              </div>

              {/* Grid of Dishes (Foods & Beverages) */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredMenu.map(item => (
                  <div 
                    key={item.id} 
                    className={`bg-[#121310] rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                      item.isAvailable 
                        ? 'border-[#2A2B25] hover:border-[#FFEB00]' 
                        : 'border-red-950/40 opacity-50'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-3xl">{item.emoji}</span>
                        <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                          item.isAvailable 
                            ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-red-950/50 text-red-400 border border-red-500/20'
                        }`}>
                          {item.isAvailable ? 'In Stock' : 'Locked out'}
                        </span>
                      </div>

                      <div className="mt-3">
                        <h3 className="text-base font-bold text-white leading-tight">{item.name}</h3>
                        <p className="text-[11px] text-amber-500 uppercase font-semibold tracking-wider mt-1">{item.category}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#22231E] flex items-center justify-between">
                      <span className="text-[#FFEB00] font-black text-base">RM {item.price.toFixed(2)}</span>
                      
                      {item.isAvailable ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-[#FFEB00] text-black font-extrabold text-xs px-3 py-1.5 rounded-lg hover:scale-105 transition-all flex items-center gap-1"
                        >
                          ➕ Add to Tray
                        </button>
                      ) : (
                        <span className="text-xs text-red-400 font-bold">Sold Out</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right side: UniSync Edge Gateway (Active ordering Tray bar) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Core Terminal Module Card */}
              <div className="bg-[#121310] border border-[#2A2B25] rounded-3xl p-5 shadow-2xl">
                
                <div className="border-b border-[#22231E] pb-3 mb-4">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    🛒 Cashier Ordering Tray
                  </h2>
                  <p className="text-xs text-gray-400">Assemble food baskets instantly for walk-in clients.</p>
                </div>

                {/* UniSync Edge Gateway Status Box */}
                <div className="mb-4 bg-[#0C0D0A] p-4 rounded-2xl border border-[#21221D] space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-extrabold tracking-wider text-[10px] uppercase">UniSync Edge Gateway</span>
                    <button 
                      onClick={() => {
                        setOfflineSync(!offlineSync);
                        showNotification(offlineSync ? "Online Sarawak Cloud sync restored." : "Offline buffer caching engaged!");
                      }}
                      className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                        offlineSync ? 'bg-[#FF9F00] text-black' : 'bg-emerald-600 text-white'
                      }`}
                    >
                      {offlineSync ? '⚠️ Local only' : '🟢 Sync Active'}
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    A localized network router setup that saves and syncs customer QR codes even during local internet disruptions to stop database drops.
                  </p>
                </div>

                {cart.length === 0 ? (
                  <div className="py-12 text-center text-gray-500">
                    <span className="text-4xl block mb-2">🍽️</span>
                    <p className="text-xs font-bold">Tray is empty.</p>
                    <p className="text-[11px] text-gray-600 mt-1">Select items from the terminal list on the left.</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                    {cart.map(item => (
                      <div key={item.id} className="bg-[#0C0D0A] p-3 rounded-xl border border-[#191A15] text-xs">
                        
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <span className="font-extrabold text-white text-sm">{item.name}</span>
                            <span className="text-gray-500 block mt-0.5">RM {item.price.toFixed(2)}</span>
                          </div>
                          <span className="font-black text-[#FFEB00]">
                            RM {(item.price * item.qty).toFixed(2)}
                          </span>
                        </div>

                        {/* Modifiers Note */}
                        <div className="mt-2">
                          <input 
                            type="text"
                            placeholder="Kitchen notes (e.g., extra sauce, no ice)"
                            value={item.note}
                            onChange={(e) => updateItemNote(item.id, e.target.value)}
                            className="w-full bg-[#121310] border border-[#2A2B25] rounded-md px-2 py-1 text-[11px] text-white focus:outline-none focus:border-[#FFEB00]"
                          />
                        </div>

                        {/* Adjust Qty controls */}
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-[#121310]">
                          <span className="text-gray-500 text-[10px]">Change quantity:</span>
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => updateCartQty(item.id, -1)}
                              className="w-6 h-6 rounded bg-[#2A2B25] text-white font-bold flex items-center justify-center text-sm"
                            >
                              -
                            </button>
                            <span className="font-bold text-white text-xs">{item.qty}</span>
                            <button 
                              onClick={() => updateCartQty(item.id, 1)}
                              className="w-6 h-6 rounded bg-[#2A2B25] text-white font-bold flex items-center justify-center text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                )}

                {/* Bill totals and checkout modal toggler */}
                {cart.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[#22231E] space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-300">Total Order Bill:</span>
                      <span className="text-xl font-black text-[#FFEB00]">
                        RM {cartTotal.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={openCheckoutProcess}
                      className="w-full py-3.5 bg-[#FFEB00] hover:bg-yellow-400 text-black font-black rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      💳 Process Payment
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}

        {/* ==================== PRE-PAYMENT SELECTION OVERLAY MODAL ==================== */}
        {showCheckoutModal && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#121310] border-2 border-[#FFEB00] w-full max-w-lg rounded-2xl p-6 shadow-2xl relative">
              
              <div className="flex justify-between items-start border-b border-[#22231E] pb-3 mb-4">
                <div>
                  <h3 className="text-lg font-black text-white">UniHaus Bill Payment Setup</h3>
                  <p className="text-xs text-gray-400 font-medium">Select dining mode and process customer payment before sending ticket.</p>
                </div>
                <button 
                  onClick={() => setShowCheckoutModal(false)}
                  className="text-gray-400 hover:text-white font-black text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* 1. Dining Toggle */}
                <div>
                  <label className="block text-gray-400 font-bold mb-2 uppercase tracking-wider">1. Dining Arrangement:</label>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <button
                      type="button"
                      onClick={() => handleDiningToggle(false)}
                      className={`py-2 rounded-xl border font-bold text-center transition-all ${
                        !isTakeaway ? 'bg-[#FFEB00] text-black border-[#FFEB00]' : 'bg-[#0C0D0A] text-gray-400 border-[#2A2B25]'
                      }`}
                    >
                      Dine-In (Table Service)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDiningToggle(true)}
                      className={`py-2 rounded-xl border font-bold text-center transition-all ${
                        isTakeaway ? 'bg-[#FFEB00] text-black border-[#FFEB00]' : 'bg-[#0C0D0A] text-gray-400 border-[#2A2B25]'
                      }`}
                    >
                      Takeaway / Delivery Side
                    </button>
                  </div>

                  {!isTakeaway && (
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {["Table 1", "Table 2", "Table 3", "Table 4", "Table 5", "Table 6", "Table 7", "Table 8"].map(tbl => (
                        <button
                          key={tbl}
                          onClick={() => setTableNumber(tbl)}
                          className={`py-1.5 rounded-lg border font-bold text-center text-[10px] ${
                            tableNumber === tbl && !isTakeaway ? 'bg-[#FFEB00] text-black border-[#FFEB00]' : 'bg-[#0C0D0A] text-gray-400 border-[#2A2B25]'
                          }`}
                        >
                          {tbl}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Choose Payment Method (Dynamic filters for takeaway vs dine-in) */}
                <div>
                  <label className="block text-gray-400 font-bold mb-2 uppercase tracking-wider">2. Payment Method:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { name: 'Sarawak Pay / S-Pay', icon: '📱' },
                      { name: 'DuitNow QR', icon: '📲' },
                      { name: 'Cash', icon: '💵' },
                      { name: 'Debit / Credit Card', icon: '💳' },
                      ...(isTakeaway ? [
                        { name: 'GrabFood API', icon: '🛵' },
                        { name: 'Foodpanda API', icon: '🐼' }
                      ] : [])
                    ].map(method => (
                      <button
                        key={method.name}
                        onClick={() => setPaymentMethod(method.name)}
                        className={`p-3 rounded-xl border font-black text-center flex flex-col items-center justify-center gap-1 transition-all ${
                          paymentMethod === method.name 
                            ? 'bg-amber-500/20 text-[#FFEB00] border-[#FFEB00]' 
                            : 'bg-[#0C0D0A] text-gray-400 border-[#2A2B25] hover:text-white'
                        }`}
                      >
                        <span className="text-xl">{method.icon}</span>
                        <span className="text-[10px]">{method.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cash calculator if cash is chosen */}
                {paymentMethod === 'Cash' && (
                  <div className="bg-[#0C0D0A] p-4 rounded-xl border border-[#2A2B25] space-y-2">
                    <div className="flex justify-between text-gray-400">
                      <span>Total Due:</span>
                      <span className="font-mono font-bold text-white">RM {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">Cash Received:</span>
                      <div className="flex-1 flex items-center bg-[#121310] border border-[#2A2B25] rounded-lg px-2">
                        <span className="text-gray-500 font-bold mr-1">RM</span>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="e.g. 50"
                          value={cashReceived}
                          onChange={(e) => setCashReceived(e.target.value)}
                          className="w-full bg-transparent text-white focus:outline-none p-1.5 font-mono text-sm"
                        />
                      </div>
                    </div>
                    {parseFloat(cashReceived || 0) >= cartTotal && (
                      <div className="flex justify-between text-emerald-400 text-xs font-bold pt-1">
                        <span>Balance Change:</span>
                        <span>RM {(parseFloat(cashReceived) - cartTotal).toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Bill Confirmation banner */}
                <div className="bg-[#FFEB00]/10 border border-[#FFEB00]/20 p-4 rounded-xl flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-300">Grand Total:</span>
                  <span className="text-lg font-black text-[#FFEB00]">RM {cartTotal.toFixed(2)}</span>
                </div>

              </div>

              {/* Modal footer CTA triggers */}
              <div className="flex gap-3 mt-6 border-t border-[#22231E] pt-4">
                <button
                  onClick={() => setShowCheckoutModal(false)}
                  className="flex-1 py-3 border border-[#2A2B25] hover:bg-[#1A1B17] rounded-xl text-xs font-bold text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePaymentAndCheckout}
                  className="flex-1 py-3 bg-[#FFEB00] hover:bg-yellow-400 text-black font-black rounded-xl text-xs uppercase tracking-wider"
                >
                  Approve & Print Ticket ✓
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ==================== MODULE 2: INTERACTIVE KITCHEN DISPLAY VIEW ==================== */}
        {activeTab === 'kitchen' && (
          <div className="space-y-6">
            
            {/* Concept Title Banner */}
            <div className="bg-[#121310] border border-[#2A2B25] p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[10px] bg-[#FFEB00]/20 text-[#FFEB00] border border-[#FFEB00]/20 font-bold px-2 py-0.5 rounded uppercase">Concept Component</span>
                <h2 className="text-xl font-bold text-white mt-1">UniKDS Verification Monitor</h2>
                <p className="text-xs text-gray-400 mt-0.5">An electronic monitor screen for cooks that uses precise visual grouping rules to eliminate incorrect food preparation mistakes.</p>
              </div>
              <div className="bg-[#FFEB00]/10 border border-[#FFEB00]/20 text-[#FFEB00] px-3 py-1.5 rounded-lg text-xs font-bold">
                KDS Monitor active
              </div>
            </div>

            {kdsOrders.length === 0 ? (
              <div className="bg-[#121310] border border-dashed border-[#2A2B25] rounded-3xl p-16 text-center animate-pulse">
                <span className="text-5xl block mb-3">🍳</span>
                <h3 className="text-lg font-bold text-white">No Tickets in Progress!</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                  All clear at the prep lines. Add items on the POS menu tab to generate dynamic kitchen tickets.
                </p>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="mt-4 bg-[#FFEB00] text-black font-black text-xs px-4 py-2.5 rounded-xl hover:scale-105 transition-all"
                >
                  Open POS Counter Register
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kdsOrders.map(order => {
                  // Determine high-contrast timing rule: blink if order has been in queue for more than 10 mins
                  const isCriticalUrgency = order.minutesElapsed >= 10;
                  
                  return (
                    <div 
                      key={order.id} 
                      className={`bg-[#121310] border-2 rounded-2xl p-5 flex flex-col justify-between shadow-xl transition-all duration-300 ${
                        isCriticalUrgency 
                          ? 'border-red-500 bg-red-950/20 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
                          : 'border-[#2A2B25]'
                      }`}
                    >
                      <div>
                        {/* Ticket metadata */}
                        <div className="flex justify-between items-start border-b border-[#22231E] pb-3 mb-3">
                          <div>
                            <span className="text-lg font-black text-white">Ticket #{order.id}</span>
                            <span className="text-[10px] text-gray-400 block">Placed {order.minutesElapsed} mins ago</span>
                          </div>
                          <div className="text-right">
                            <span className="bg-[#FFEB00] text-black text-[11px] font-black px-3 py-1 rounded-md block">
                              {order.table}
                            </span>
                            <span className="text-[9px] text-emerald-400 block mt-1 font-bold">{order.paymentMethod}</span>
                          </div>
                        </div>

                        {/* Blinking Urgency Indicator */}
                        <div className="mb-3">
                          <span className={`px-2 py-1 rounded text-[10px] font-black tracking-wide inline-block ${
                            isCriticalUrgency 
                              ? 'bg-red-500 text-white animate-bounce' 
                              : 'bg-[#FFEB00]/10 text-[#FFEB00]'
                          }`}>
                            {isCriticalUrgency ? '⚠️ CRITICAL DELAY: PREP NOW' : '⏱️ NORMAL PACE'}
                          </span>
                        </div>

                        {/* Ticket items detail list */}
                        <div className="space-y-3 my-2">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="bg-[#0C0D0A] p-3 rounded-xl border border-[#191A15]">
                              <div className="flex justify-between text-sm">
                                <span className="font-extrabold text-white">
                                  {item.qty}x <span className="underline decoration-[#FFEB00] decoration-2">{item.name}</span>
                                </span>
                              </div>
                              
                              {/* Recipe Custom Modifications (High Contrast Highlights) */}
                              {item.note && (
                                <div className="mt-2 text-xs bg-[#FFEB00]/10 border-l-2 border-[#FFEB00] p-1.5 px-2 text-[#FFE69E] font-extrabold rounded">
                                  💡 Cook Instruction: {item.note}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Completion actions */}
                      <div className="mt-5 pt-3 border-t border-[#22231E] flex items-center justify-between">
                        <span className="text-xs text-amber-500 flex items-center gap-1 font-bold">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span> Cook Station
                        </span>
                        <button
                          onClick={() => finishKitchenOrder(order.id)}
                          className="bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
                        >
                          Done Cooking ✓
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* ==================== MODULE 3: AUTOMATED BACKEND STOCK HUB ==================== */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            
            {/* Concept Title Banner */}
            <div className="bg-[#121310] border border-[#2A2B25] p-5 rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <span className="text-[10px] bg-[#FFEB00]/20 text-[#FFEB00] border border-[#FFEB00]/20 font-bold px-2 py-0.5 rounded uppercase">Concept Component</span>
                <h2 className="text-xl font-bold text-white mt-1">UniSync Automatic Stock Hub</h2>
                <p className="text-xs text-gray-400 mt-0.5">An automated backend portal that completely digitizes inventory records and tracks recipe deductions live based on sales data.</p>
              </div>
              <div className="bg-[#0C0D0A] px-4 py-2 rounded-xl border border-[#2A2B25] text-xs font-bold text-gray-300">
                Ingredients Monitored: <span className="text-[#FFEB00] font-black">{inventory.length}</span>
              </div>
            </div>

            {/* Threshold alarms */}
            {inventory.some(inv => inv.stock <= inv.warningLimit) && (
              <div className="bg-red-950/40 border-l-4 border-red-500 p-4 rounded-xl text-xs">
                <h4 className="text-sm font-bold text-red-300">⚠️ STOCK HUB ALERT: LOW INGREDIENT LEVEL</h4>
                <p className="text-gray-400 mt-1">
                  Key raw stock levels are running below buffer limits. Lock items temporarily on the right menu override block to prevent front-counter ordering drops.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Ingredient Database Sheet */}
              <div className="lg:col-span-8 bg-[#121310] border border-[#2A2B25] rounded-2xl p-5">
                <h3 className="text-sm font-black uppercase mb-4 tracking-wider text-[#FFEB00]">Stock Hub Ingredient Buffer Levels</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#2A2B25] text-gray-500 pb-2">
                        <th className="py-2 font-bold uppercase">Raw Ingredient</th>
                        <th className="py-2 font-bold uppercase">Automatic Stock</th>
                        <th className="py-2 font-bold uppercase">System Status</th>
                        <th className="py-2 font-bold uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#22231E]">
                      {inventory.map(inv => {
                        const isLow = inv.stock <= inv.warningLimit;
                        return (
                          <tr key={inv.id} className="hover:bg-gray-800/10 transition-colors">
                            <td className="py-3 font-bold text-white">{inv.name}</td>
                            <td className="py-3 font-mono font-bold text-gray-300">
                              {inv.stock} {inv.unit}
                            </td>
                            <td className="py-3">
                              <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                                isLow ? 'bg-red-950 text-red-400 border border-red-500/20' : 'bg-emerald-950 text-emerald-400 border border-emerald-500/20'
                              }`}>
                                {isLow ? '⚠️ Low' : '✅ Safe'}
                              </span>
                            </td>
                            <td className="py-3 text-right space-x-1">
                              <button
                                onClick={() => quickRefillStock(inv.id, 10)}
                                className="px-2.5 py-1 bg-[#0C0D0A] border border-[#2A2B25] hover:border-[#FFEB00] text-gray-300 hover:text-white rounded text-[10px]"
                              >
                                +10
                              </button>
                              <button
                                onClick={() => quickRefillStock(inv.id, 50)}
                                className="px-2.5 py-1 bg-[#0C0D0A] border border-[#2A2B25] hover:border-[#FFEB00] text-gray-300 hover:text-white rounded text-[10px]"
                              >
                                +50
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Manual Override list (Syncs instantly to POS status tags) */}
              <div className="lg:col-span-4 bg-[#121310] border border-[#2A2B25] rounded-2xl p-5 space-y-4">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#FFEB00]">Menu Lockout Override</h3>
                  <p className="text-[11px] text-gray-400 mt-1">Directly trigger sold out locks to sync across cashier POS screens instantly.</p>
                </div>

                <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1">
                  {menuItems.map(item => (
                    <div 
                      key={item.id} 
                      className="bg-[#0C0D0A] p-3 rounded-xl border border-[#22231E] flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-xs text-white block">{item.emoji} {item.name}</span>
                        <span className="text-[10px] text-gray-400">RM {item.price.toFixed(2)}</span>
                      </div>
                      
                      <button
                        onClick={() => toggleAvailable(item.id)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                          item.isAvailable 
                            ? 'bg-red-950 hover:bg-red-900 text-red-400 border border-red-500/30' 
                            : 'bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {item.isAvailable ? "Lockout" : "Available"}
                      </button>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* --- FOOTER BANNER --- */}
      <footer className="mt-16 bg-[#0C0D0A] border-t border-[#2A2B25] py-8 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 UniHaus. Streamlined campus western food solutions.</p>
          <div className="flex items-center gap-2">
            <span className="bg-[#FFEB00] text-black font-black px-2 py-0.5 rounded text-[10px]">EASY-TERMINAL ACTIVE</span>
          </div>
        </div>
      </footer>

    </div>
  );
}