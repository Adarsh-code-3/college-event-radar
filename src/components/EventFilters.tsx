
import React, { useState } from 'react';
import { Filter, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { EventFilters as FilterType } from '../utils/eventUtils';
import { getEventTypes, getColleges } from '../data/mockEvents';

interface EventFiltersProps {
  onFilterChange: (filters: FilterType) => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterType>({
    type: "",
    college: "",
    startDate: null,
    endDate: null,
    searchQuery: "",
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const eventTypes = getEventTypes();
  const colleges = getColleges();
  
  const handleFilterChange = (key: keyof FilterType, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleClearFilters = () => {
    const clearedFilters: FilterType = {
      type: "",
      college: "",
      startDate: null,
      endDate: null,
      searchQuery: filters.searchQuery,
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };
  
  // Count active filters (excluding search query)
  const activeFilterCount = Object.entries(filters).filter(([key, value]) => {
    return key !== 'searchQuery' && value !== "" && value !== null;
  }).length;
  
  return (
    <div className="mb-6 space-y-4">
      {/* Search bar and filter toggle */}
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search events..." 
            value={filters.searchQuery || ''}
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            className="pl-10"
          />
        </div>
        <Button 
          onClick={() => setShowFilters(!showFilters)}
          variant={showFilters ? "secondary" : "outline"}
          className="relative"
          size="icon"
        >
          <Filter className="h-4 w-4" />
          {activeFilterCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>
      
      {/* Extended filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg bg-white">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
            <Select
              value={filters.type || ""}
              onValueChange={(value) => handleFilterChange('type', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All types</SelectItem>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
            <Select
              value={filters.college || ""}
              onValueChange={(value) => handleFilterChange('college', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All colleges" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All colleges</SelectItem>
                {colleges.map((college) => (
                  <SelectItem key={college} value={college}>{college}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                  {filters.startDate ? (
                    format(filters.startDate, "PPP")
                  ) : (
                    <span className="text-muted-foreground">Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 pointer-events-auto">
                <Calendar
                  mode="single"
                  selected={filters.startDate || undefined}
                  onSelect={(date) => handleFilterChange('startDate', date)}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                  {filters.endDate ? (
                    format(filters.endDate, "PPP")
                  ) : (
                    <span className="text-muted-foreground">Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={filters.endDate || undefined}
                  onSelect={(date) => handleFilterChange('endDate', date)}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="md:col-span-4 flex justify-end">
            <Button 
              onClick={handleClearFilters} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Clear filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFilters;
