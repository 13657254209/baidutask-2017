v a r   c o v e r d v   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' c o v e r _ d v ' ) ;  
 v a r   s u b m i t   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' s u b m i t ' ) ;  
 v a r   c o n f i r m   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' c o n f i r m ' ) ;  
 v a r   c a n c e l   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' c a n c e l ' ) ;  
 v a r   s h o w d v   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' s h o w _ d v ' ) ;  
 f u n c t i o n   s h o w D v ( ) {  
     s h o w d v . s t y l e . d i s p l a y   =   " b l o c k " ;  
     c o v e r d v . s t y l e . d i s p l a y   =   " b l o c k " ;  
 }  
 f u n c t i o n   c o v e r D v ( ) {  
     s h o w d v . s t y l e . d i s p l a y   =   " n o n e " ;  
     c o v e r d v . s t y l e . d i s p l a y   =   " n o n e " ;  
 }  
 s u b m i t . o n c l i c k   =   s h o w D v ;  
 c o n f i r m . o n c l i c k   =   c o v e r D v ;  
 c o v e r d v . o n c l i c k   =   c o v e r D v ;  
 c a n c e l . o n c l i c k   =   c o v e r D v ; 