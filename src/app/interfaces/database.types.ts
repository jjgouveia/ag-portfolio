export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          aditional: Json[] | null
          category: string
          color: string[]
          context: string
          description: string | null
          id: number
          image: string[]
          manual: string | null
          name: string
          price: number | null
        }
        Insert: {
          aditional?: Json[] | null
          category: string
          color: string[]
          context: string
          description?: string | null
          id?: never
          image: string[]
          manual?: string | null
          name: string
          price?: number | null
        }
        Update: {
          aditional?: Json[] | null
          category?: string
          color?: string[]
          context?: string
          description?: string | null
          id?: never
          image?: string[]
          manual?: string | null
          name?: string
          price?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
