import { cn } from '@/lib/utils';
import { createContext, useContext, useState } from 'react';

// 1. Create Context for State Management
const TabsContext = createContext(null);

// 2. Tabs Root Provider Component
export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// 3. Tabs List Component (The Container/Heading Row)
export function TabsList({ children, className }) {
  return (
    <div 
      role="tablist"
      aria-orientation="horizontal"
      className={cn('', className)}
    >
      {children}
    </div>
  );
}

// 4. Tabs Trigger Component (The Button)
export function TabsTrigger({ value, children, className }) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      onClick={() => setActiveTab(value)}
      className={cn(
        ' capitalize cursor-pointer bg-lighten-3/background',
        isActive && 'bg-darken-2/background font-medium',
        className
      )}
    >
      {children}
    </button>
  );
}

// 5. Tabs Content Component (The Panel)
export function TabsContent({ value, children, className }) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  const { activeTab } = context;
  const isActive = activeTab === value;

  if (!isActive) return null

  return (
    <div 
      role="tabpanel" 
      data-state="active"
      className={cn(`h-fit w-full `, className)}
    >
      {children}
    </div>
  );
}
